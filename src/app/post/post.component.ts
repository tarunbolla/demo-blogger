import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/Post';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  users: User[];
  filterUserId: number;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  loadPosts() {
    this.postService.loadPosts().subscribe(
      posts => this.posts = posts
    );
  }

  loadUsers() {
    this.userService.loadUsers().subscribe(
      users => this.users = users
    );
  }

}
