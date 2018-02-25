import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../model/Post';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  loadPosts(): Observable<Post[]> {
    return this.http.get(this.postsUrl).map(
      res => res as Post[]
    );
  }

  loadPost(id: number): Observable<Post> {
    let url = this.postsUrl + '/' + id;
    return this.http.get(url).map(
      res => res as Post
    );
  }
}

