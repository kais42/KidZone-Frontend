import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = environment.apiUrl + 'api/user/';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  editProfile(data: any): Observable<any> {
    return this.http.put(API_URL + 'editProfile', data);
  }
}
