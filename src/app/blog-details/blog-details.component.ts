import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import {Router, ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:PostService,private spinner: NgxSpinnerService){}

  ngOnInit(){
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);
    
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
