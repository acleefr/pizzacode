import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pizza} from '../model/pizza.model';
import {Booking} from "../model/booking.model";
import {Contact} from "../model/contact.model";

const API_URL = 'http://localhost:8080/api/default/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAllPizza(): Observable<any> {
    return this.http.get<Pizza[]>(API_URL + 'pizza');
  }

  postBooking(contact : Contact): Observable<any> {
    return this.http.post<Contact>(API_URL + 'contact',contact);
  }




}
