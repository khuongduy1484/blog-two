import {Component, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../module/blog';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './editblog.component.html',
  selector: 'app-editblog',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  blog: Blog;
  blogForm: FormGroup;

  constructor(private blogService: BlogService, private  router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      completed: ['', [Validators.required]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getById(id).subscribe(next => {
        this.blog = next;
        this.blogForm.patchValue(this.blog);
      }, error => {
        console.log(error);
        this.blog = null;
      }
    );
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const {value} = this.blogForm;
      const data = {
        ...this.blog,
        ...value
      };
      this.blogService.updateBlog(data).subscribe(next => {
          this.router.navigate(['/blog']);
        },
        error => console.log(error));
    }
  }
}
