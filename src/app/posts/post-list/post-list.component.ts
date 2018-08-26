import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  selector: 'app-post-list'
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: 'Twinkle, Twinkle' },
  //   { title: 'Second Post', content: 'Little Star' },
  //   { title: 'Third Post', content: 'How I wonder' }
  // ];
@Input() posts = [];



  // addpost(post) use interface
}
