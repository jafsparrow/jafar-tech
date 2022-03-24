import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '@jafar-tech/shared/data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { hydrateUserFromLocalStorage, selectIsUserAuthenticated } from '..';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('endPointURL') public apiUrl: string,
    private store: Store
  ) {}

  checkAuthInLocalStorage() {
    if (!localStorage.getItem('token')) return false;

    if (!localStorage.getItem('user')) return false;

    // [NOTE - TODO] this is a hack to hydrate user from the localstorage. this can be achived using metareducer in ngrx. Need to lookinto later
    this.store.select(selectIsUserAuthenticated).subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        let userSavedInLocalStorage = JSON.parse(localStorage.getItem('user')!);
        this.store.dispatch(
          hydrateUserFromLocalStorage({ user: userSavedInLocalStorage })
        );
      }
    });

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
