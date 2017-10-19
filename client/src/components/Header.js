import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a className="left brand-logo">Eli's App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Login with Google</a></li>
            
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
