import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Blog} from '../module/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public readonly API_URL = 'http://5982b2e834e4a300116fea0d.mockapi.io/api/todos';

  constructor(private http: HttpClient) {
  }

  getAllBlog(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  createBlog(blog: Blog): Observable<any> {
    return this.http.post(this.API_URL, blog);
  }

  updateBlog(blog: Blog): Observable<any> {
    return this.http.put<Blog>(`${this.API_URL}/${blog.id}`, blog);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, {responseType: 'text'});
  }

  getSearchBlogByTitle(title: string): Observable<any> {
    return this.http.get(`${this.API_URL}/title/${title}`);
  }
}
