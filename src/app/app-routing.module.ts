import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserComponent } from './user/user.component';

const ROUTES: Route[] = [
  {path: '', component: PostComponent},
  {path: 'postdetail/:id', component: PostDetailComponent},
  {path: 'userdetail/:userId', component: UserComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ 
    RouterModule.forRoot(ROUTES)
   ],
  declarations: []
})
export class AppRoutingModule { }
