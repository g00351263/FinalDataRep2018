import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner' // loader animation
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgForm } from "@angular/forms";
import {PostService} from '../services/post.service'; // interface for blog
import {Post1} from '../post.model.1'; // interface for signup

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:PostService,private spinner: NgxSpinnerService) { }
  
  // methode to post form data to server database //
  onAddPost2(form2: NgForm) {
    this.service.addPost2(form2.value.user, form2.value.pass).subscribe();
    
    console.log(form2.value); // log form value
    form2.resetForm(); // reset form data on screen//
  }

  ngOnInit() {

  // spinner animation timer
    this.spinner.show(); 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);

  }

}

