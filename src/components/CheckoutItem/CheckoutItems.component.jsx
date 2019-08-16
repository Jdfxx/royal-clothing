import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  removeItem
} from "../../store/cart/cart.actions";


const CheckoutItem = ({
  item,
  removeItemFromCart,
  addItemToCart,
  removeItem
}) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(item)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItemToCart(item)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(
  null,
  { removeItemFromCart, removeItem, addItemToCart }
)(CheckoutItem);
