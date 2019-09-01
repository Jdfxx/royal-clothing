import {
    CHECK_USER_SESSION,
    EMAIL_SIGNIN_START,
    GOOGLE_SIGNIN_START,
    SET_CURRENT_USER,
    SIGNIN_FAILURE,
    SIGNIN_SUCCESS,
    SIGNOUT_FAILURE,
    SIGNOUT_START,
    SIGNOUT_SUCCESS,
    SIGNUP_START,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from "./user.actionTypes";

export const setUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};


export const googleSigninStart = () => {
    return {
        type: GOOGLE_SIGNIN_START
    }
};

export const signinSuccess = (user) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: user
    }
};

export const signinFailure = (error) => {
    return {
        type: SIGNIN_FAILURE,
        payload: error
    }
};

export const emailSigninStart = (emailAndPassword) => {
    return {
        type: EMAIL_SIGNIN_START,
        payload: emailAndPassword
    }
};

export const checkUserSession = () => {
    return {
        type: CHECK_USER_SESSION
    }
};

export const signoutStart = () => {
    return {
        type: SIGNOUT_START
    }
};

export const signoutSuccess = () => {
    return {
        type: SIGNOUT_SUCCESS
    }
};

export const signoutFailure = (error) => {
    return {
        type: SIGNOUT_FAILURE,
        payload: error
    }
};

export const signupStart = (userCredentials) => {
    return {
        type: SIGNUP_START,
        payload: userCredentials
    }
};

export const signupSuccess = ({user, additionalData}) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: {user, additionalData}
    }
};

export const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: error
    }
};