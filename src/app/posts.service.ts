import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'https://ng-complete-guide-19eb8.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {}

  createAndStorePosts(title, content) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(this.url, postData)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchPosts() {
    return this.http.get<Post[]>(this.url).pipe(
      map((responseData) => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      })
    );
  }

  deletePosts() {
    return this.http.delete(this.url);
  }
}
