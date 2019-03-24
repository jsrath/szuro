import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventDetails } from './app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  apiUrl = './assets/mock-api.json';

  getEvents(): Observable<EventDetails[]> {
    return this.http.get<EventDetails[]>(this.apiUrl);
  }
}
