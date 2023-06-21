import React, { Component, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./nav.css";
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";

function LoginNavLink(props) {
  const [token, setToken, removeToken] = useCookies(["token"]);

  function handleLogout() {
    removeToken("token");
  }

  return (
    <>
      {token["token"] ? (
        <li>
          <a href="/" onClick={handleLogout}>
            Log Out
          </a>
        </li>
      ) : (
        <li className={props.getNavLinkClass("/login")}>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
}

class Nav extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {};

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  };

  render() {
    return (
      <nav>
        <ul>
          <li className={this.getNavLinkClass("/")}>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <LoginNavLink getNavLinkClass={this.getNavLinkClass} />
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
