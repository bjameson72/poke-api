import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <NavLink to="/">
          <img
            src="https://seeklogo.com/images/P/Pokemon-logo-0EAFBD7E4E-seeklogo.com.png"
            alt="Pokemon!"
            className="headerLogo"
          />
        </NavLink>

        <nav>
          <ul className="NavList">
            <li>
              <NavLink to="/" exact>
                Search Pokemon!
              </NavLink>
            </li>
            <li>
              <NavLink to="/team">My Team</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
