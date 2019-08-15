import React from "react";
import CustomButton from "../CustomButton/custom-button.component";
import "./CartDropdown.styles.scss";
import CartItem from "../CartItem/CartItem.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../store/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {!cartItems.length ? (
                    <span className="empty-message">Your cart is empty</span>
                ) : (
                    cartItems.map(item => <CartItem key={item.id} item={item}/>)
                )}
            </div>
            <CustomButton
                disabled={!cartItems.length}
                onClick={() => {
                    history.push("/checkout");
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
