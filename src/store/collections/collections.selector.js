import {createSelector} from 'reselect';

export const selectState = state => state;

export const selectCollections = createSelector([selectState], state=>state.collections);