import {takeLatest, call, put,all} from "redux-saga/effects";
import {
    FETCH_COLLECTIONS_START,
} from "./shop.types";
import {
    convertCollectionSnapshotToMap,
    firestore
} from "../../firebase/firebase.utils";
import {
    fetchCollectionsFailure,
    fetchCollectionsSuccess
} from "./shop.actions";

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection("collection");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ]);
}
