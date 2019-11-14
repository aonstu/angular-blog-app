import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  constructor(private blogHttpService: BlogHttpService,
    private _route: ActivatedRoute, private router: Router,
    private toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);
  }


  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current blog is : " + this.currentBlog);

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      }
    )
  }//end oninit

  public editThisBlog(): any {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {
        console.log(data);
        this.toastr.success("blog edited successfuly", "success!");

        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error("some error occured", "error");
      }
    )
  }

}
