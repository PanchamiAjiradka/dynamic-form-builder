import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = false;
  private role: 'admin' | 'user' | null = null;

  login(email: string, role: 'admin' | 'user') {
    this.isLoggedIn = true;
    this.role = role;
    localStorage.setItem('role', role);
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    this.isLoggedIn = false;
    this.role = null;
    localStorage.clear();
  }

  getRole(): 'admin' | 'user' | null {
    return (
      this.role ?? (localStorage.getItem('role') as 'admin' | 'user' | null)
    );
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || localStorage.getItem('loggedIn') === 'true';
  }
}
