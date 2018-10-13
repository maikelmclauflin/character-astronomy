import App from "./js/components/App/";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom"

render()

function render() {
  const wrapper = document.getElementById("app");
  return ReactDOM.render(tree(), wrapper);
}

function tree() {
  return (
    <Router>
      <App />
    </Router>
  )
}