import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string; role: 'admin' | 'user' }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: { email: string; role: 'admin' | 'user' } }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
