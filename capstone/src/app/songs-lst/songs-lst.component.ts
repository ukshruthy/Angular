import { Component, OnInit, Input } from '@angular/core';
import {  DataService } from '../data.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-songs-lst',
  templateUrl: './songs-lst.component.html',
  styleUrls: ['./songs-lst.component.css']
})
export class SongsLstComponent implements OnInit {
  

 
  constructor(private dataService: DataService,private _Activatedroute:ActivatedRoute,private router:Router) { 
    console.log("In service constructor")
    console.log('onInit');
      this.dataService.getdata().subscribe(
        data=>{
          this.mysong = data as string[];
        },
        (err: HttpErrorResponse)=>{console.log(err.message)}
       
      );
    
  
  }
  searchText;
  currentUser;
  //searchText="";
  mysong: string[] = [];
  disabled:boolean=true;
  PlayListAddButtons:boolean=false;
  //PlaylistAdded:boolean=false;
  isselected:boolean;
  isloggedIn:boolean=true;
  hiddenProperty:boolean=false;
  hiddenProperty1:boolean=false;
  id:any;
  public sSong: String;
  public sAlbum: String;
  public sSingers: String;
  public slength: any;
  public sgenre: String;
  public sURL: String;
  public sisselected:boolean;

  onChange(event) {
    if (this.searchText === event) return;
    this.searchText = event;
    console.log(this.searchText);
  }

  hidden(event : Event)
  {
    
    this.hiddenProperty = !this.hiddenProperty;
    
  }
  hidden1(event : Event)
  {
    
    this.hiddenProperty1 = !this.hiddenProperty1;
    
  }
  
  
 onSubmit(){
  
   if(confirm("Are you sure want to add songs to Playlist..")){
    
    this.PlayListAddButtons=true;
   
  
  }
   else{
     alert("Adding Songs Cancelled..");
  }
 console.log(this.PlayListAddButtons)
  
 }

  ngOnInit(){
    
   if(localStorage.getItem('currentUser')){
   this.isloggedIn=true;
   }
   else
   {
     this.isloggedIn=false
   }

  }
  
p:any[]=[];

  delete(index){
  
    for(let i=0;i<=this.p.length;i++){
    console.log(this.p[i]);
    this.dataService.deleteentry(this.p[i]).subscribe();
    this.router.navigate(['Songss']);
 
  }
}
sub;
mus:any[]=[];
ID;

  OnChange(s){
  
    this.p.push(s.id);
    this.id=s.id;
   
    this.mus.push(s);
    console.log(this.mus);
    
    localStorage.setItem('playlist',JSON.stringify(this.mus));
   
   // this.play.push(localStorage.getItem('playlist'));
    if(this.mus.length>1){
      this.disabled=false;}
    console.log(s);
  // for(let i=0;i<this.mus[i].length;i++){
    //this.dataService.addNew1(this.mus).subscribe();
   //}
  }
InChange(s){
  console.log(this.isselected);
}
   
  
}
