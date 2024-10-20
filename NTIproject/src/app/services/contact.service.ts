import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contact';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get`);
  }

  addContact(contactData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, contactData);
  }

  updateContact(id: string, contactData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${id}`, contactData);
  }
}
