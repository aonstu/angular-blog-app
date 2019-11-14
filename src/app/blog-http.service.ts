import { Injectable } from '@angular/core';

//importing http client to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = "ZGFjMTIzN2ZlNjQyZTcwM2Q0ZWFkZTExZTE0MTNhZjMzMWY3MTU3ZjJkODBjMTE3ZGY1MjVjY2ZkNTFjNDkwNjc5YjkxYjhlOWVhNzJjMDdhMDg1NzUyNDk5NTFhNTAxNzZkZDY3YjE0ZjM3ZGQ3ZWJlNmFhZmM0N2Y0NmNkMGY1YQ==";

  constructor(private _http: HttpClient) {
    console.log("blog http service was called");
  }

  //handling errors
  private handleError(err: HttpErrorResponse) {
    console.log("handle error http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to return all the blogs

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken=ZGFjMTIzN2ZlNjQyZTcwM2Q0ZWFkZTExZTE0MTNhZjMzMWY3MTU3ZjJkODBjMTE3ZGY1MjVjY2ZkNTFjNDkwNjc5YjkxYjhlOWVhNzJjMDdhMDg1NzUyNDk5NTFhNTAxNzZkZDY3YjE0ZjM3ZGQ3ZWJlNmFhZmM0N2Y0NmNkMGY1YQ==');
    console.log(myResponse);
    return myResponse;

  }

  //method to get a particular blog

  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  } //end get blog information function

  public createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);

    return myResponse;

  }//end createblog

  public deleteBlog(blogId): any {

    let data = {};
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);

    return myResponse;

  }//end deleteblog

  public editBlog(blogId, blogData): any {

    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);

    return myResponse;

  }//end editblog

}
