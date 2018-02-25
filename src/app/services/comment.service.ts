import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../model/Comment';

@Injectable()
export class CommentService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(
    private http: HttpClient
  ) { }

  loadComments(postId: number): Observable<Comment[]> {
    let url = this.postsUrl + '?postId=' + postId;
    return this.http.get(url).map(
      res => res as Comment[]
    );
  }

}
