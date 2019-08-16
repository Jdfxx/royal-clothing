import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collection => collection[collectionUrlParam]
  );

export const selectCollectionsForPreview = createSelector([selectCollections],
    collection => Object.keys(collection).map(key=> collection[key]));
