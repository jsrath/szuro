import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) { }

  apiUrl = "https://cors-anywhere.herokuapp.com/https://www.maesteszinhaz.hu/api"
  getEvents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
