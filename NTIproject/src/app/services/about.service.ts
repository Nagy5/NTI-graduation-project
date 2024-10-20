import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private apiUrl = 'http://localhost:3000/about';

  constructor(private http: HttpClient) {}

  getAboutData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get`);
  }

  addAboutData(aboutData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, aboutData);
  }

  updateAboutData(id: string, aboutData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${id}`, aboutData);
  }
}
