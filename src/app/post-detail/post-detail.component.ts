import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/Post';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { Comment } from '../model/Comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  id: number;
  post: Post;
  user: User;
  comments: Comment[];

  constructor(
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loadPost();
  }

  loadPost() {
    this.postService.loadPost(this.id).subscribe(
      post =>  {
        this.post = post;
        this.loadUser(post.userId);
        this.loadComments(post.id);
      }
    );
  }

  loadUser(userId: number) {
    this.userService.loadUser(userId).subscribe(
      user => this.user = user
    )
  }

  loadComments(postId: number) {
    this.commentService.loadComments(postId).subscribe(
      comments => this.comments = comments
    );
  }

}
