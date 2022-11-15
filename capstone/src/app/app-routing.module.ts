import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  BrowserModule } from '@angular/platform-browser';
import { AbouttComponent } from './aboutt/aboutt.component';
import { AppComponent } from '../app/app.component';
import { HomeComponent } from './home/home.component';
import { SongsLstComponent } from './songs-lst/songs-lst.component';
import { PlaylisttComponent } from './playlistt/playlistt.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';
import { AuthgaurdService } from './authgaurd.service';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';




const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,
  },
  {
    path:'Aboutt',
    component:AbouttComponent,
  },
  {
    path:'profile/:id',
    component:ProfileComponent,
  },
  {
    path:'view',
    component:ChartComponent,
  },
  {
    path:'Songss/:add',
    component:AddComponent,
    //canActivate:[AuthgaurdService]
  },
 
 {
  path:'Songss',
  component:SongsLstComponent,
 },
 {
  path:'list',
  component:ListComponent,
 },
  // {
  //   path:'Songs',
  //   component:SongsLstComponent,
  //  canActivate:[AuthgaurdService]
  // },
 
 
  {
    path:'Play',
    component:PlaylisttComponent,
   
  },
  {
    path:'login',
    component:AppComponent,
  },
  {
    path:'login/:id',
    component:AppComponent,
  },
  {
    path:'SignIn',
    component:LoginComponent,
  },
  
  {
    path:'SignIn/:register',
    component:RegisterComponent,
  },
  {
    path:'Songss/:edit/:id',
    component:AddComponent,
   // canActivate:[AuthgaurdService]
  }
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
