import { Component, EventEmitter } from '@angular/core';

import { Post } from '../post-model';
import { PostService } from '../post-service';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postService: PostService) {}

  onAddPost(form) {
    if (form.invalid) { return; }
  this.postService.addPost(form.value.title, form.value.content);
  }

}
