import React from 'react'
import "./Navbar.scss"
import logo from'../../logo.png'

export default function navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="city trip logo" />
        <ul className="nav-links" >
        <li>
            <a href='/' className='nav-link'>HOME
            </a>
            
            </li>
            <li>
            <a href='/' className='nav-link'>ABOUT
            </a>
            
            </li>
            <li>
            <a href='/' className='nav-link active'>TRIPS
            </a>
            
            </li>
            </ul>


    </nav>
  )
}
