import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Meeting} from '../model/meeting.model';

const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  getAllRencontre(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(API_URL + 'getAllRencontre', { responseType: 'json' });
  }

  postRencontre(meeting: Meeting): Observable<any> {
    return this.http.post<Meeting>(API_URL + 'createRencontre', meeting);
  }

  getRencontreById(id : string): Observable<Meeting> {
    return this.http.get<Meeting>(API_URL + 'getRencontreById/'+id, { responseType: 'json' });
  }
}
