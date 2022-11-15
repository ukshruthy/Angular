import { stringify } from '@angular/compiler/src/util';
import { Component,OnInit ,OnChanges, Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';
//import { Session } from 'inspector';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Capstone';
  public sEmail:string;
  public sPassword :string;
  public sFname :string;
  public sLname :string;
  public sLocation :string;
  public sMobile :number;
  sub;
  id;
  mus:any[]=[];
  currentUser;
  ID;
  hiddenProperty:boolean=false;
  hiddenProperty1:boolean=true;
  isloggedIn:boolean;
 username:string;
 
  constructor(private router:Router,private dataService:DataService,private ActivatedRouter:ActivatedRoute){
  // this.currentUser=localStorage.getItem('this.login1[0].id');
    // this.id = this.ActivatedRouter.snapshot.params['id'];
    // this.isloggedIn = !this.id;
    
 
    
  }

 ngOnInit(){
 
  if(localStorage.getItem('currentUser')){
    this.isloggedIn=false;
    }
    else
    {
      this.isloggedIn=true;
    }
   
 }
 


logOut(){
 //this.dataService.deleteNew(this.id);
   //this.currentUser==false;
   localStorage.removeItem('currentUser');
   this.router.navigate(['SignIn'])
}


  

}
