import {
  SET_COLLECTIONS,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";
import {convertCollectionSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export const setCollections = collections => {
  return {
    type: SET_COLLECTIONS,
    payload: collections
  };
};

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsStartAsync = () => (dispatch)=> {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchCollectionsStart());
    collectionRef.get()
        .then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));

};

export const fetchCollectionsFailure = message => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: message
  };
};

export const fetchCollectionsSuccess = collections => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
};
