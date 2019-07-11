import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BlogService} from './service/blog.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { BloglistComponent } from './bloglist/bloglist.component';
import {RouterModule} from '@angular/router';
import { CreateblogComponent } from './createblog/createblog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditblogComponent } from './editblog/editblog.component';
import { SearchBlogComponent } from './search-blog/search-blog.component';
@NgModule({
  declarations: [
    AppComponent,
    BloglistComponent,
    CreateblogComponent,
    EditblogComponent,
    SearchBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
