import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {appRoutingModule} from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { DynamicEngagesComponent } from './dynamic-engages/dynamic-engages.component';
import { CaurosalComponent } from './caurosal/caurosal.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PostsComponent,
    AlertComponent,
    LoginComponent,
    DynamicEngagesComponent,
    CaurosalComponent,
    FooterComponent,
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
