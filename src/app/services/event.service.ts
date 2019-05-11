import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/app.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl

  getEvents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
