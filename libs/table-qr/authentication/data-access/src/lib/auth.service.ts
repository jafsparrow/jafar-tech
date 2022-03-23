import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@jafar-tech/shared/data-access';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}

  checkAuthInLocalStorage() {
    if (!localStorage.getItem('token')) return false;

    if (!localStorage.getItem('user')) return false;

    return true;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    console.log('login call hapened');
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post<User>(url, { email, password });
  }

  tableLogin(password: string) {
    const url = `${this.apiUrl}/tablelogin`;
    return this.http.post<User>(url, { password });
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url, { email, password });
  }

  getStatus(): Observable<User> {
    const url = `${this.apiUrl}/status`;
    return this.http.get<User>(url);
  }
}
