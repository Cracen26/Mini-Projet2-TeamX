import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl)
  }


}
