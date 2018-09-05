import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post-model';

@Component({
  templateUrl: './post-create.component.html',
  selector: 'app-post-create',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  isLoading = false;
  private mode = 'create';
  private postId: string;
  post: Post;

  constructor(public postService: PostService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content};
        });
        // enter edit mode
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }


  onSavePost(form: NgForm) {
    if (form.invalid) { return; }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postService.addPost(form.value.title, form.value.content);
    } else {
      this.postService.updatePost(this.postId, form.value.title, form.value.content);
    }

  form.resetForm();
  }



}
