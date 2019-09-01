import {
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SET_CURRENT_USER
} from "./user.actionTypes";

const initialState = {
    currentUser: null,
    error: null
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
            case SIGNIN_SUCCESS:
                return {
                    ...state,
                    currentUser: payload,
                    error: null
                };

            case SIGNIN_FAILURE:
                return {
                    ...state,
                    error: payload
                };
            default:
                return state;
        }
    }
;

export default reducer;
