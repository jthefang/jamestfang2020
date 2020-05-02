import React, { Component } from 'react';
import {
  Collapse, NavbarToggler,
  Navbar, NavbarBrand, Nav, NavItem, NavLink, Container
} from 'reactstrap';

export default class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => { //don't have to bind this!
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() { 
    return <div> 
      <Navbar color="light" className="text-large" light expand="sm"> 
        <Container>
          <NavbarBrand href="/">James Fang</NavbarBrand>
          <NavbarToggler onClick={this.toggle} /> 
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem><NavLink href="/">Home</NavLink></NavItem>
              <NavItem><NavLink href="/projects">Projects</NavLink></NavItem>
              <NavItem><NavLink href="/summaries">Summaries</NavLink></NavItem>
              <NavItem><NavLink href="/notes">Notes</NavLink></NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  }
}