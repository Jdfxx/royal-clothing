import {takeLatest, put, all, call} from "redux-saga/effects";
import {CHECK_USER_SESSION, EMAIL_SIGNIN_START, GOOGLE_SIGNIN_START, SIGNOUT_START} from "./user.actionTypes";
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";
import {signinFailure, signinSuccess,signoutFailure, signoutSuccess} from "./user.actions";


export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            signinSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch (error) {
        yield put(signinFailure(error));
    }
}

export function* signinWithGoogle() {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromUserAuth, user);
}

export function* onGoogleSigninStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, signinWithGoogle)
}

export function* signinWithEmail({payload: {email, password}}) {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user);
}

export function* onEmailSigninStart() {
    yield takeLatest(EMAIL_SIGNIN_START, signinWithEmail)
}

export function* isUserAuthenticated() {
    try {
       const userAuth =  yield getCurrentUser();
       if(!userAuth) return;
       yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signinFailure(error))
    }
}

export function* checkUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signout() {
    try {
        yield auth.signOut();
        yield put(signoutSuccess());
    } catch (error) {
        yield put(signoutFailure())
    }
}

export function* onSignoutStart() {
    yield takeLatest(SIGNOUT_START, signout)
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(checkUserSession),
        call(onSignoutStart)
    ]);
}