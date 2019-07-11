import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BloglistComponent} from './bloglist/bloglist.component';
import {CreateblogComponent} from './createblog/createblog.component';
import {EditblogComponent} from './editblog/editblog.component';
import {SearchBlogComponent} from './search-blog/search-blog.component';

const routes: Routes = [{
  path: 'blog',
  component: BloglistComponent
}, {
  path: 'create-blog',
  component: CreateblogComponent
},
  {
    path: 'blog/:id/edit',
    component: EditblogComponent
  },
  {
    path: 'search',
    component: SearchBlogComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
