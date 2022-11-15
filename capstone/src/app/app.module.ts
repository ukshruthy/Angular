import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AbouttComponent } from './aboutt/aboutt.component';
import { HomeComponent } from './home/home.component';
import { SongsLstComponent } from './songs-lst/songs-lst.component';
import { LoginComponent } from './login/login.component';
import { PlaylisttComponent } from './playlistt/playlistt.component';
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
//import { FilterPipe } from './filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileComponent } from './profile/profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    AbouttComponent,
    HomeComponent,
    SongsLstComponent,
    LoginComponent,
    PlaylisttComponent,
    AddComponent,
    RegisterComponent,
   // FilterPipe,
    ChartComponent,
    ProfileComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule,
    RouterTestingModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
