import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service'; // getting services from post component
import { NgxSpinnerService } from 'ngx-spinner'; // loading animatin module loader with npm

@Component({
  selector: 'app-news', // name selector to be put in html directive
  templateUrl: './news.component.html', // page to be used as html
  styleUrls: ['./news.component.css'] // styling page of css
})
export class NewsComponent implements OnInit {
news: any[] = []; // array object to store json data coming from news api

  constructor(private postserve: PostService, private spinner: NgxSpinnerService ) { } // depedency injections

  ngOnInit() { // method loads with page
    
    this.spinner.show(); // showing spinner animation at loading
 
    setTimeout(() => { // setting up loading animation time//
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);

    this.postserve.getPostsDataNews().subscribe(data => { // getting json data from newsApi
      this.news = data.articles;
  });
 }
}
