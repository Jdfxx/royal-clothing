import {SET_CURRENT_USER} from "./user.actionTypes";

export const setUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};
