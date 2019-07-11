import {Component, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../module/blog';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  blog: Blog = new Blog();
  submitted = false;
  blogs: Blog[] = [];
  subscription: Subscription;

  constructor(private blogservice: BlogService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.blogservice.getAllBlog().subscribe(next => (this.blogs = next), error => (this.blogs = []));
  }

  newBlog(): void {
    this.submitted = false;
    this.blog = new Blog();
  }

  save() {
    this.subscription = this.blogservice.createBlog(this.blog).subscribe(data => console.log(data), error => console.log(error));
    this.blog = new Blog();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}


