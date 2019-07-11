import {Component, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../module/blog';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  blog: Blog;
  submitted = false;
  subscription: Subscription;
  blogForm: FormGroup;

  constructor(private blogservice: BlogService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      completed: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.blogForm.valid) {
      const {value} = this.blogForm;
      const data = {
        ...this.blog,
        ...value
      };
      this.blogservice.createBlog(data).subscribe(next => {
          this.router.navigate(['/blog']);
        },
        error => console.log(error));
    }
  }
}


//
// blog: Blog;
// blogForm: FormGroup;
//
// constructor(private blogService: BlogService, private  router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
// }
//
// ngOnInit() {
//   this.blogForm = this.fb.group({
//     title: ['', [Validators.required, Validators.minLength(10)]],
//     completed: ['', [Validators.required]]
//   });
//   const id = +this.route.snapshot.paramMap.get('id');
//   this.blogService.getById(id).subscribe(next => {
//       this.blog = next;
//       this.blogForm.patchValue(this.blog);
//     }, error => {
//       console.log(error);
//       this.blog = null;
//     }
//   );
// }
//
// onSubmit() {
//   if (this.blogForm.valid) {
//     const {value} = this.blogForm;
//     const data = {
//       ...this.blog,
//       ...value
//     };
//     this.blogService.updateBlog(data).subscribe(next => {
//         this.router.navigate(['/blog']);
//       },
//       error => console.log(error));
//   }
// }
// }
