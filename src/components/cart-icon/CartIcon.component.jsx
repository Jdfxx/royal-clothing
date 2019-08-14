import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './CartIcon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../store/cart/cart.actions";

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
};

export default connect(null, {toggleCartHidden})(CartIcon);