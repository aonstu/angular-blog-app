import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//ng2-toastr
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

//router model used for setting up application level routes
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statement for service
import { BlogService } from './blog.service';

import { BlogHttpService } from './blog-http.service';
// import { homedir } from 'os';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    
    
    //router module forRoot method to declare possible routes in the application
    
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'create',component:BlogCreateComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'about',component:AboutComponent},
      {path:'**',component:NotFoundComponent},
      
    ])
  ],
  providers: [ BlogService , BlogHttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
