import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import Input from "js/components/presentational/Input"
import {
  pages,
} from 'config'
import {
  Link,
} from 'react-router-dom'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
import {
  Navbar,
  Alignment,
  Button,
} from '@blueprintjs/core'

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
        <Navbar fixedToTop>
          <Navbar.Group>
            <Navbar.Heading>Blueprint</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
          </Navbar.Group>
        </Navbar>
      </Fragment>
    )
  }
}
/*
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
*/
export {
  Header,
}