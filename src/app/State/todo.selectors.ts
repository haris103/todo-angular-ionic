import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiStateInterface, AppStateInterface } from '../modelss/modelss.module';

export const selectApiFeatureSelector = createFeatureSelector<ApiStateInterface>('apireducer');

export const selectDataFromAPi = createSelector(
  selectApiFeatureSelector,
  (state: ApiStateInterface) => state.todo,
);
export const selectDeletedDataFromApi = createSelector(
  selectApiFeatureSelector,
  (state)=> state.todo
);

