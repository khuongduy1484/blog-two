import {Component, OnInit} from '@angular/core';
import {Blog} from '../module/blog';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {
  title: string;
  blog: Blog[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.title = '';
  }

  private searchBlog() {
    this.blog = [];
    this.blogService.getSearchBlogByTitle(this.title).subscribe(data => this.blog = data);
  }
  onSubmit() {
    this.searchBlog();
  }

}
