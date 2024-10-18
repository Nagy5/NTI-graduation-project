import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'https://dummyjson.com/auth/login'; 

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(private _http: HttpClient) {
    const token = localStorage.getItem('accesstoken');
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  login(username: string, password: string): Observable<any> {
    return this._http.post<any>(this.apiURL, { username, password }).pipe(
      tap((res) => {
        const token = res.token;
        localStorage.setItem('accesstoken', token);
        this.tokenSubject.next(token);
        console.log(res);
      })
    );
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem('accesstoken');
    this.tokenSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.tokenSubject.value !== null;
  }
}
