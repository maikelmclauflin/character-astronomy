import {
  isMatch,
  assign,
  isUndefined,
} from 'lodash'
import {
  join,
} from 'path'
const siteName = 'Character Astronomy'

const paths = {
  to: '/',
  login: null,
  text: 'Home',
  children: [{
    to: 'about',
    text: 'About',
  }, {
    to: 'services',
    text: 'Services',
  }, {
    to: 'contact',
    text: 'Contact',
  }, {
    to: 'technology',
    text: 'Tech',
  }, {
    to: 'app',
    text: 'App',
    login: true,
    children: [{
      to: 'dashboard',
      text: 'Dashboard',
    }, {
      to: 'profile',
      text: 'Profile',
      children: [{
        to: 'edit',
        text: 'Edit Profile',
      }],
    }, {
      to: 'document',
      text: 'Document',
      children: [{
        to: 'edit',
        text: 'Edit',
      }, {
        to: 'suggest',
        text: 'Suggest',
      }, {
        to: 'arrange',
        text: 'Arrange',
      }],
    }],
  }],
  relative: [{
    to: 'login',
    text: 'Login',
    login: false,
  }, {
    to: 'logout',
    text: 'Logout',
    login: true,
  }, {
    to: 'register',
    text: 'Register',
    login: false,
  }, {
    to: 'forgotpassword',
    text: 'Forgot',
    login: false,
  }]
}

const routes = {
  available: createRoutes(paths, { login: null, }),
  loggedOut: createRoutes(paths, { login: false, }),
  loggedIn: createRoutes(paths, { login: true, }),
}
console.log(routes)
export {
  siteName,
  routes,
}

function createRoutes (path, match, list = [], stackPlease) {
  const base = assign({
    text: '',
    // login: false,
    children: [],
    relative: [],
  }, path)
  const {
    children,
    to,
    text,
    relative,
    login,
  } = base
  let memo = list
  if (isMatch(base, match)) {
    memo = memo.concat({
      to,
      text,
    })
  }
  let childList = children
  let stacked = relative
  if (stackPlease) {
    stacked = children.concat(relative)
    childList = []
  }
  memo = childList.reduce((memo, child) => {
    const copy = assign({}, child)
    const path = join(to, copy.to, '/')
    const isLoggedIn = isUndefined(copy.login) ? login : copy.login
    // if (path.indexOf('/app/app/') === 0) debugger;
    return createRoutes(assign(copy, {
      login: isLoggedIn,
      to: path,
    }), match, memo)
  }, memo)
  memo = stacked.reduce((memo, child) => {
    const copy = assign({}, child)
    const path = join('.', to, copy.to)
    const isLoggedIn = isUndefined(copy.login) ? login : copy.login
    return createRoutes(assign(copy, {
      login: isLoggedIn,
      to: path,
    }), match, memo, true)
  }, memo)
  return memo
}
