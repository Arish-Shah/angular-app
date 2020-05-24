import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  url = 'https://ng-complete-guide-19eb8.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(this.url, postData).subscribe((response) => {
      console.log(response);
    });
  }

  onFetchPosts() {
    this.http
      .get(this.url)
      .pipe(
        map((responseData) => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
