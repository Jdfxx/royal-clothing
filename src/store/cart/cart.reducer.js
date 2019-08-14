import {TOGGLE_CART_HIDDEN} from './cart.actionTypes';

const initialState = {
    hidden: true
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
        default:
            return state;
    }
};

export default reducer;
