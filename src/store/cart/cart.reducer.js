import {ADD_ITEM, TOGGLE_CART_HIDDEN} from './cart.actionTypes';

const initialState = {
    hidden: true,
    cartItems: []
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

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
                cartItems: [...state.cartItems, payload]
            }
        }
        default:
            return state;
    }
};

export default reducer;
