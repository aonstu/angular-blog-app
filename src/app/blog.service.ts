import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  public allBlogs = [
    { "blogId" : "1",
    "author" : "aman",
      "title": "First Post",
      "exerpt": "Lorem ipsum dolor sit amet.",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nisi odio neque aliquam."
    }, {
      "author" : "colt",
      "blogId" : "2",
      "title": "Second Post",
      "exerpt": "Lorem ipsum dolor sit amet",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nisi odio neque aliquam"
    }, {
      "author" : "maxmillian",
      "blogId" : "3",
      "title": "Third Post",
      "exerpt": "Lorem ipsum dolor sit amet.",
      "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas nisi odio neque aliquam"
    }
  ]

  public currentBlog;

  

  constructor() {
    console.log("service constructor is called");
   }

  //method to return all the blogs

   public getAllBlogs():any {
    return this.allBlogs;
  }

  //method to get a particular blog

  public getSingleBlogInformation (currentBlogId) : any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog ;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  } //end get blog information function

  


}
