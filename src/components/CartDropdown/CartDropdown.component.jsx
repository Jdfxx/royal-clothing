import React from "react";
import CustomButton from "../CustomButton/custom-button.component";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem/CartItem.component";
import {connect} from "react-redux";

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
