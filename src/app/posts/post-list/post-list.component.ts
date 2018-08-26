import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post-model';
import { PostService } from '../post-service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  selector: 'app-post-list'
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: 'First Post', content: 'Twinkle, Twinkle' },
  //   { title: 'Second Post', content: 'Little Star' },
  //   { title: 'Third Post', content: 'How I wonder' }
  // ];
@Input() posts: Post[] = [];

constructor(public postService: PostService) {} // public is a shortcut for this.x = x

ngOnInit(): void {
  this.posts = this.postService.getPosts();
}

}

