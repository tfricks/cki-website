import React, { Component } from 'react';
import Link from 'gatsby-link'

import './header.scss'

class Header extends Component {
  render() {
    return (
        <nav className="nav">
            <div className="nav-menu">
                <div className = "left nav-item">
                    tfricks>&nbsp; <span className="blinking-cursor"> |</span>
                </div>
                <div className="right">
                    <Link to="/" className="nav-item"> Home </Link>
                    <Link className="nav-item" to="/about">About</Link>
                    <Link className="nav-item" to="/resume">Resumé</Link>
                    <Link className="nav-item" to="/blog">Blog</Link>
                </div>
            </div>
        </nav>
    );
  }
}

export default Header