import {SET_CURRENT_USER} from "./user.actionTypes";

const initialState = {
    currentUser: null
};

const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: payload
            };
        }
        default:
            return state;
    }
};

export default reducer;
