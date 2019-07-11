import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Blog} from '../module/blog';
import {BlogService} from '../service/blog.service';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit, OnDestroy {
  blogs: Observable<Blog[]>;
  subscription: Subscription;
  constructor(private blogService: BlogService) {

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.blogs = this.blogService.getAllBlog();
  }

  deleteBlog(id: number) {
    this.blogService.deleteBlog(id).subscribe(data => {
      this.loadData();
    }, error => {
      console.log(error);
    });
  }
}
