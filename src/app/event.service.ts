import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  siteUrl = 'https://maesteszinhaz.hu/api';

  getEvents() {
    return this.http.get(this.siteUrl);
  }
}
