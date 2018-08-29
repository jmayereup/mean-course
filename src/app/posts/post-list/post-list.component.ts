import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post-model';
import { PostService } from '../post-service';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  selector: 'app-post-list'
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'Twinkle, Twinkle' },
  //   { title: 'Second Post', content: 'Little Star' },
  //   { title: 'Third Post', content: 'How I wonder' }
  // ];
posts: Post[] = [];
private postsSub: Subscription;

constructor(public postService: PostService) {} // public is a shortcut for this.x = x

ngOnInit(): void {
  this.postService.getPosts();  // gets saved posts from DB - TBI
  this.postsSub = this.postService.getPostUpdatedListener().subscribe((posts: Post[]) => {
    this.posts = posts;
  });
}

ngOnDestroy() {
  this.postsSub.unsubscribe();
}

}

