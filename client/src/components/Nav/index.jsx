import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import logo from '../../images/bakery-logo.png'

const styles= {
    logo: {
        width: '200px',
        height: '150px'
    },
    navLink: {
      fontSize: '20px',
    }
}

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav justify-content-end" style={styles.navLink}>
          <li className="nav-item mx-1">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li> 
          <li className="nav-item mx-1">
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li> 
          <li className="nav-item mx-1">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row d-flex">
      <div className="px-5">
        <Link to="/">
          <img src={logo} style={styles.logo} />
        </Link>
      </div>

      <nav className="nav justify-content-end" style={styles.navLink}>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
