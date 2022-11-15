import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router ,CanActivate,CanDeactivate, ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  
 
  constructor(private router: Router,private dataService:DataService) { 
    
  }


 ngOnInit(){
   
 }
tree:boolean;

  isloggedIn: boolean =true;
  
   canActivate():boolean{
     if(this.tree==true){
       this.router.navigate(['Songss']);
    
     }
     else if(confirm("Please Login to your Account..."))
     {
       
      this.router.navigate(['SignIn'])
      return;
     }
     else{
       this.router.navigate(['Home'])
     }
      
   }
   canDeactivate():boolean{
   
     if(confirm("Are you sure want to exit without saving..?"))
     {
        
     return true;
     }
      else{
       this.router.navigate(['add']) 
      }
   }
   
   


   
   }

