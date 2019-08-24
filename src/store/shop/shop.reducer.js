import {SET_COLLECTIONS} from "./shop.types";

const initialState = {
  collections: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COLLECTIONS: {
      return {
        ...state,
        collections: payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
