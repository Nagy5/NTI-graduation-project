import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userApi = 'http://localhost:3000/admin/login';

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(private _http: HttpClient) {
    const token = localStorage.getItem('accesstoken');
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.userApi, { email, password }).pipe(
      tap((res) => {
        const token = res.accessToken;
        localStorage.setItem('accesstoken', token);
        this.tokenSubject.next(token);
      })
    );
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  logOut() {
    localStorage.removeItem('accesstoken'); // Remove unnecessary check
    this.tokenSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.tokenSubject.value !== null;
  }
}
