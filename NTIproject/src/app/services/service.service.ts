import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/all');
  }

  deleteService(serviceId: string): Observable<any> {
  const url = `${this.apiUrl}/delete/${serviceId}`;
    return this.http.delete(url);
  }
addService(serviceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, serviceData);
  }
}
