import React from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {connect} from "react-redux";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropdown.component";
import {selectCurrentUser} from "../../store/user/user.selectors";
import {selectCartDropdownHidden} from "../../store/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionsLink
} from "./Header.styles";
import {signoutStart} from "../../store/user/user.actions";

const Header = ({user, dropdownHidden, signUserOut}) => {
    const handleLogout = () => {
        signUserOut();
    };

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionsLink to="/shop">Shop</OptionsLink>
                <OptionsLink to="/contact">Contact</OptionsLink>
                {!user ? (
                    <OptionsLink to="/login">Sign In</OptionsLink>
                ) : (
                    <OptionsLink to="/" onClick={handleLogout}>
                        Sign out
                    </OptionsLink>
                )}
                <CartIcon/>
            </OptionsContainer>
            {!dropdownHidden && <CartDropdown/>}
        </HeaderContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    dropdownHidden: selectCartDropdownHidden
});

const mapDispatchToProps = dispatch => ({
    signUserOut: () => dispatch(signoutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
