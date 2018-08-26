import { Post } from './post-model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})  // root ensures that only 1 instance is ever created
export class PostService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];  // brackets create a true copy of a reference object,
                             // since we don't want to pass a pointer to the original data
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }

}
