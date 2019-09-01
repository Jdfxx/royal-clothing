import {all, call, takeLatest, put} from 'redux-saga/effects';
import {SIGNOUT_SUCCESS} from "../user/user.actionTypes";
import {clearCart} from "./cart.actions";


export function* clearCartonSignout() {
    yield put(clearCart());
}


export function* onSignoutSuccess() {
    yield takeLatest(SIGNOUT_SUCCESS, clearCartonSignout);
}

export function* cartSagas() {
    yield(all([
        call(onSignoutSuccess)
    ]));
}