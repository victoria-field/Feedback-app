import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css';

class Header extends Component {
  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return (
        <button className='btn btn-primary btn-lg'><a href="/auth/google">Login with Google</a> </button>

        );
      default:
        return(
        <button classname='btn btn-primary'><a href="/api/logout">logged in</a></button>

        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to ={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
        >Eli's App</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}

          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}){
  return {auth};
}

export default connect(mapStateToProps) (Header);
