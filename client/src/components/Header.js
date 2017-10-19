import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Eli's App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Login with Google</a></li>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
