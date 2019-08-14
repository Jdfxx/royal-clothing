import {ADD_ITEM, TOGGLE_CART_HIDDEN} from "./cart.actionTypes";

export const toggleCartHidden = () => {
    return {
        type: TOGGLE_CART_HIDDEN
    }
};

export const addItemToCart = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};