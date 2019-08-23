import {SET_COLLECTIONS} from "./shop.types";

export const setCollections = (collections) => {
    return {
        type: SET_COLLECTIONS,
        payload: collections
    }
};