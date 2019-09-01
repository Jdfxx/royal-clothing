import {
    EMAIL_SIGNIN_START,
    GOOGLE_SIGNIN_START,
    SET_CURRENT_USER,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS
} from "./user.actionTypes";

export const setUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};


export const googleSigninStart = ()=> {
    return {
        type: GOOGLE_SIGNIN_START
    }
};

export const signinSuccess = (user)=> {
    return {
        type: SIGNIN_SUCCESS,
        payload: user
    }
};

export const signinFailure = (error)=> {
    return {
        type: SIGNIN_FAILURE,
        payload: error
    }
};

export const emailSigninStart = (emailAndPassword)=> {
    return {
        type: EMAIL_SIGNIN_START,
        payload: emailAndPassword
    }
};
