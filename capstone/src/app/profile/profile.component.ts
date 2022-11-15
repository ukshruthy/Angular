import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
sub;
id;
mus:any[]=[];
ID;
currentUser;
isloggedIn: boolean=true;
username;
  constructor(private dataService: DataService,private ActivatedRouter:ActivatedRoute,private router:Router) { 
   
    
    
  //  this.isUser=!this.username;
  //   this.sub=this.ActivatedRouter.paramMap.forEach(
  //     params=>{
  //       console.log(params);
  //       this.id = params.get('id');
  //       console.log(this.id);
       
  //     });
  //   this.dataService.getdata1().subscribe(data=>{
  //     this.mus = data as string[]
      
  //     this.ID = this.mus.find(card=> card.id == this.id);
  //     console.log(this.ID);
    
  //     localStorage.setItem('ID',JSON.stringify(this.ID));
  //     this.currentUser= JSON.parse(localStorage.getItem('ID')) ;
  //    this.username=this.currentUser.Fname;
   
  //    console.log(this.username)
     
    
  //    }); 
  //    this.username=!this.isUser
  //    if(!this.isUser)
  //    {
     
  //     // this.router.navigate(['Songss']);
  //    }
   }

  ngOnInit(): void {
    if(localStorage.getItem('currentUser')){
      this.isloggedIn=true;
      }
      else
      {
        this.isloggedIn=false
      }
    // if(this.isloggedIn){
     this.currentUser= JSON.parse(localStorage.getItem('login1[i]')) ;
     console.log(this.currentUser);
    // }
    // else{
    //   !this.isloggedIn;
    // }
  }

}
