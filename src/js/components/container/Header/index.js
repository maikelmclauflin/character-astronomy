import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import Input from "js/components/presentational/Input"
import {
  pages,
} from 'config'
import {
  Link,
} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: false,
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Fragment>
        <p className="mb-0 p-3">&nbsp;</p>
        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand tag={Link} to="/">Company Name</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {pages.map((link) => {
                const {
                  to,
                  text,
                } = link
                return (
                  <NavItem key={to}>
                    <NavLink tag={Link} to={to}>{text}</NavLink>
                  </NavItem>
                )
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    )
  }
}

export {
  Header,
}