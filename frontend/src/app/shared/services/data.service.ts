import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  get(path: string, params?: Params): Observable<any> {
    return this.http.get(`${environment.baseUrl}${path}`, {params});
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}${path}`, body);
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(`${environment.baseUrl}${path}`, body);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.baseUrl}${path}`);
  }
}
