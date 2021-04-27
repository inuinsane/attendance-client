import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      variant="dark"
      style={{ background: "rgb(0,99,121)", backgroundImage: "linear-gradient(to right, rgba(0,99,121,1) 0%, rgba(8,164,196,1) 100%)" }}
    >
      <Link to="/" className="navbar-brand">
        Kehadiran Pegawai
      </Link>
      <Nav className="mr-auto">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </Nav>
    </Navbar>
  )
}

export default TopNav
