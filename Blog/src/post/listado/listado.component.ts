import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listado.component.html',
  styles: ``
})
export class ListadoComponent {
  posts: Post[] = [];
  startIndex: number = 0; 

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getAll().subscribe(posts => (this.posts = posts));
  }

  borrar(post: Post): void {
    this.postService.delete(post.id).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== post.id);
    });
  }

  siguiente(): void {
    if (this.startIndex + 3 < this.posts.length) {
      this.startIndex += 3;
    }
  }

  anterior(): void {
    if (this.startIndex >= 3) {
      this.startIndex -= 3;
    }
  }
}