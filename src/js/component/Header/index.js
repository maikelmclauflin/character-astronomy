import React, { Component, Fragment } from "react"
import {
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'
import {
  Layout,
  Menu,
  Icon,
  Input,
} from 'antd'
import styled from 'react-emotion'
import {
  RoutesSubscribe,
  UserSubscribe,
} from 'js/container'
import {
  headerHeight,
} from 'js/styles'
const {
  Item: MenuItem,
} = Menu
const {
  Header: LayoutHeader,
} = Layout;
class UnstyledHeader extends Component {
  makeKey(path) {
    return `nav-${path}`
  }
  render() {
    const {
      props,
    } = this
    const {
      match,
      className,
      // routes,
    } = props
    return (
      <UserSubscribe>{(user) => (
        <RoutesSubscribe match={match} user={user}>{(routes) => (
          <LayoutHeader className={className}>
            <div key="logo" className="logo" />
            <Menu
              key="menu"
              className="height-match"
              theme="dark"
              onClick={this.handleClick}
              selectedKeys={[this.makeKey(match.path)]}
              mode="horizontal"
            >
              {routes.available(user).map(({
                to,
                text,
              }, index) => (
                <Menu.Item key={this.makeKey(to)}>
                  <NavLink to={to}>
                    {text}
                  </NavLink>
                </Menu.Item>
              ))}
            </Menu>
          </LayoutHeader>
        )}</RoutesSubscribe>
      )}</UserSubscribe>
    )
  }
}

/*
          <Menu.SubMenu title={<span className="submenu-title-wrapper">
            <Icon type="compass" />Pages
          </span>}></Menu.SubMenu>
*/
const StyledHeader = styled(UnstyledHeader)`
position: fixed;
height: ${headerHeight}px;
z-index: 1;
width: 100%;
top: 0;
.height-match {
  line-height: ${headerHeight}px;
}
`
const Header = withRouter(StyledHeader)
export {
  Header,
}