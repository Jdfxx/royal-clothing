import React from "react";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({item: {name, price, quantity, imageUrl}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
