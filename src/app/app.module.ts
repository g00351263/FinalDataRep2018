import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { ContactusComponent } from './contactus/contactus.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: 'post',
    component: BlogDetailsComponent
  },
  {
    path: 'create',
    component: BlogCreateComponent
  },
  {
    path: 'edit/:id',
    component: BlogEditComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'signup',
    component: RegisterComponent,
    data: {title: 'Sign Up'}
  },
  {
    path: '',
    component: NewsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogDetailsComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule,
  NgxSpinnerModule,
  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
