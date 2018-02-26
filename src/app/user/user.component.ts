import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId: number;
  user: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = +this.activatedRoute.snapshot.paramMap.get('userId');
    this.loadUser();
  }

  loadUser() {
    this.userService.loadUser(this.userId).subscribe(
      user => this.user = user
    );
  }

}
