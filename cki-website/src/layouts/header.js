import React, { Component } from 'react';
import Link from 'gatsby-link'

import './header.scss'
import logo from '../files/logo.gif'
class Header extends Component {
  render() {
    return (
        <div className="header">
        <img src={logo} alt="Logo" width="100px"/> <Link className="titleText" to="/" > Montana District of Circle K International</Link>
            <nav>
            <div class="nav-mobile">
                <a id="nav-toggle" href="#!"><span></span></a>
            </div>
                <div className="nav-menu">
                <ul>
                    <li><Link to="/" className="nav-item"> Home </Link></li>
                    <li><Link className="nav-item" to="/leadership">Our Leaders</Link></li>
                    <li><Link className="nav-item" to="/events">Events</Link></li>
                    <li><Link className="nav-item" to="/projects">Projects</Link></li>
                    <li><Link className="nav-item" to="/reports">Reports</Link></li>
                </ul>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header