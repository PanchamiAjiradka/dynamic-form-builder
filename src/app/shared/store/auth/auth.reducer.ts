import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; role: 'admin' | 'user' } | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('loggedIn') === 'true',
  user: localStorage.getItem('loggedIn')
    ? {
        email: localStorage.getItem('email')!,
        role: localStorage.getItem('role') as 'admin' | 'user',
      }
    : null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    error,
  })),
  on(logout, () => ({
    isAuthenticated: false,
    user: null,
    error: null,
  }))
);
