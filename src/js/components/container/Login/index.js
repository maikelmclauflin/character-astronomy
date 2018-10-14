import React, {
  Component,
} from 'react'
import GoogleLogin from 'react-google-login'
const key = "122831451871-0ohpgk2drger6j674ohm18bem6tddkeb.apps.googleusercontent.com"

const responseGoogle = (response) => {
  console.log(response);
}

export class Login extends Component {
  render() {
    return (
      <div></div>
    )
  }
}
      // <GoogleLogin
      //   clientId={key}
      //   buttonText="Login"
      //   onSuccess={responseGoogle}
      //   onFailure={responseGoogle}
      // />