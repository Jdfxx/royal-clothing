import {
    ADD_ITEM, REMOVE_ITEM,
    REMOVE_ITEM_FROM_CART,
    TOGGLE_CART_HIDDEN
} from "./cart.actionTypes";

export const toggleCartHidden = () => {
  return {
    type: TOGGLE_CART_HIDDEN
  };
};

export const addItemToCart = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  };
};

export const removeItem = item => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
};