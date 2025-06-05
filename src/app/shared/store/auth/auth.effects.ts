import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';
import { of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      delay(500),
      map(({ email, role }) => {
        localStorage.setItem('role', role);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('email', email);

        return loginSuccess({
          user: { email, role },
        });
      }),
      catchError(() => of(loginFailure({ error: 'Invalid credentials' })))
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.clear();
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
