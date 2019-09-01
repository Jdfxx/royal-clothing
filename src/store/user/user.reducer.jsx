import {
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SET_CURRENT_USER, SIGNOUT_FAILURE, SIGNOUT_SUCCESS, SIGNUP_FAILURE
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
            case SIGNOUT_SUCCESS: {
                return {
                    ...state,
                    currentUser: null,
                    error: null
                }
            }
            case SIGNIN_SUCCESS:
                return {
                    ...state,
                    currentUser: payload,
                    error: null
                };
            case SIGNOUT_FAILURE:
            case SIGNIN_FAILURE:
            case SIGNUP_FAILURE:
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
