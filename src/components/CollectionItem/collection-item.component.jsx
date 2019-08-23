import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {connect} from 'react-redux';
import {addItemToCart} from "../../store/cart/cart.actions";

const CollectionItem = ({addItemToCart, item}) => {

    const {name, price, imageUrl} = item;
    return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
        <CustomButton className="custom-button" inverted onClick={() => addItemToCart(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

export default connect(null, {addItemToCart})(CollectionItem);
