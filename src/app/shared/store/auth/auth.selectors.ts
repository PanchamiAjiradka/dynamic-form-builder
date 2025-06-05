import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);
