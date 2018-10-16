
import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import {
  pages,
} from 'config'
import {
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'
import {
  Layout,
  Menu,
  Input,
  Icon,
} from 'antd'
import {
  connect,
} from 'react-redux'
import styled from 'react-emotion'
const {
  Item: MenuItem,
} = Menu
const {
  Header: LayoutHeader,
} = Layout;
const height = 42;
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
      routes,
    } = props
    return (
      <LayoutHeader className={className}>
        <div className="logo" />
        <Menu
          className="height-match"
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.makeKey(match.path)]}
          mode="horizontal"
        >
            {routes.map(({
              to,
              text,
            }, index) => {
              return (<Menu.Item key={this.makeKey(to)}>
                <NavLink to={to}>
                  {text}
                </NavLink>
              </Menu.Item>)
            })}
        </Menu>
      </LayoutHeader>
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
height: ${height}px;
z-index: 1;
width: 100%;
.height-match {
  line-height: ${height}px;
}
`
export default StyledHeader