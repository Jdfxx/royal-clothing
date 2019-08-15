import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './CartIcon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../store/cart/cart.actions";
import {selectCartItemsCount} from "../../store/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemsCount}) => {

    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemsCount}</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);