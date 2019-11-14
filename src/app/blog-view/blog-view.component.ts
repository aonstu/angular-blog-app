import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  //empty object
  public currentBlog;


  //declare a dummy blog variable here


  constructor(private _route: ActivatedRoute, private router: Router,
    public blogHttpService: BlogHttpService, private toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
    console.log("blog-view constructor is caled");

  }


  ngOnInit() {
    console.log("blog-view ngOnInit called");
    //getting blog id from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log('this is the blog id : ' + myBlogId);

    // this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    // console.log(this.currentBlog);

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log('this is the data : ' + data);
        this.currentBlog = data["data"];
        console.log('current blog Id is : ' + this.currentBlog.title);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      }
    )
  } //end ngoninit

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success("blog deleted successfuly", "success!");

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error("some error occured", "error");
      }
    )
  }

  ngOnDestroy() {
    console.log("blog-view destroyed");

  }
}
