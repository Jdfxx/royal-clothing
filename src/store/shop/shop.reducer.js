import {
  SET_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS
} from "./shop.types";

const initialState = {
  collections: null,
  isFetching: true,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COLLECTIONS_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        collections: payload
      };
    }
    case FETCH_COLLECTIONS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMsg: payload
      };
    }
    case SET_COLLECTIONS: {
      return {
        ...state,
        collections: payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
