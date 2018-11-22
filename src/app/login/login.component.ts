import { Component, OnInit } from '@angular/core';
////////////////////////////////////////////////////
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  post : any = [];
  userName : String; 
  password : String;
  loginData = { username:'', password:'' };
  message = '';
  data: any;
 
  constructor(private http: HttpClient,private router:Router, private route: ActivatedRoute, private service:PostService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.userName = this.post.userName;
      console.log("message" +this.userName);

    });



  }

   ///////////
   login() {
    this.http.post('/api/signin',this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['books']);
    }, err => {
      this.message = err.error.msg;
    });
  }
  }
   