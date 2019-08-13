import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const Header = ({ user }) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {!user ? (
          <Link to="/login" className="option">
            Sign In
          </Link>
        ) : (
          <Link to="/" className="option" onClick={handleLogout}>
            Sign out
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
    user: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
