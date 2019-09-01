import {
  ADD_ITEM,
  REMOVE_ITEM,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART_HIDDEN,
    CLEAR_CART
} from "./cart.actionTypes";
import { addItemToCart, removeItem } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItem(state.cartItems, payload)
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cartItems: []
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      };
    }
    default:
      return state;
  }
};

export default reducer;
