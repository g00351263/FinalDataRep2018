import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private service:PostService,private spinner: NgxSpinnerService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.name, form.value.title, form.value.content).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
      this.spinner.show();
 
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
       }, 1000);

    }
  }