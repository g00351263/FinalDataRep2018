import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupData = { username:'', password:'' };
  message = '';

  constructor(private spinner: NgxSpinnerService,private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);

  }
signup() {
  this.http.post('/api/signup',this.signupData).subscribe(resp => {
    console.log(resp);
    this.router.navigate(['login']);
  }, err => {
    this.message = err.error.msg;
  });
}
}

