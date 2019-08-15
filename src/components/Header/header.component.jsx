import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import {selectCurrentUser} from '../../store/user/user.selectors';
import {selectCartDropdownHidden} from "../../store/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const Header = ({user, dropdownHidden}) => {
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
          <CartIcon/>
      </div>
        {!dropdownHidden && <CartDropdown/>}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    dropdownHidden: selectCartDropdownHidden
});

export default connect(mapStateToProps)(Header);
