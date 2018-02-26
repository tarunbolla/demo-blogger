import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PostService, UserService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
