import { Post } from './post-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})  // root ensures that only 1 instance is ever created
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
      console.log(postData.message);
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  onPostUpdated(post: Post) {
    this.posts.push(post);

  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe((responseData) => {
      console.log(responseData.message);
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    });

  }

}
