import React, {Component} from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavHashLink as NavLink} from 'react-router-hash-link'

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/#home">Ben Reitman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              to="/#home"
              scroll={el =>
                el.scrollIntoView({behavior: 'smooth', block: 'end'})
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/#aboutme"
              scroll={el =>
                el.scrollIntoView({behavior: 'smooth', block: 'end'})
              }
            >
              About Me
            </NavLink>
            <NavLink //TODO: change this so that scrolls into correct view
              to="/#projects"
              scroll={el =>
                el.scrollIntoView({behavior: 'smooth', block: 'start'})
              }
            >
              Projects
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
