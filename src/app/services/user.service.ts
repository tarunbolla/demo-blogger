import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs/observable';

@Injectable()
export class UserService {

  usersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  loadUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl).map(
      res => res as User[]
    );
  }

  loadUser(id: number): Observable<User> {
    let url = this.usersUrl + '/' + id;
    return this.http.get(url).map(
      res => res as User
    );
  }
}
