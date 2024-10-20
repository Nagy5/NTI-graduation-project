import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) {}

  getHomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get`);
  }

  addHomeData(homeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, homeData);
  }

  updateHomeData(id: string, homeData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${id}`, homeData);
  }
}
