import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl,Validators,AbstractControl,NG_VALIDATORS} from '@angular/forms';
import { Directive } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/Operators';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  SongsForm: FormGroup;
  //songname:any;
  
  loading = false;
  submitted = false;
  isAddMode: boolean;
  public id:any;
  public sSong: String;
  public sAlbum: String;
  public sSingers: String;
  public slength: any;
  public sgenre: String;
  public sURL: String;
  public sisselected:boolean;
 // mysong:any[]=[];
 
  Genre: String[]=["","Country music","Romantic","PoP ","Rythmn","Classic","HipHop","Others","bazz"];
  s: String;
  constructor(private _fb: FormBuilder,private _Activatedroute:ActivatedRoute, private dataService: DataService,private router:Router)  {
   
  }
 sub;
 ID;
 mus:any[]=[];
  ngOnInit() {
    
   
    this.id = this._Activatedroute.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.SongsForm = new FormGroup({
      sSong: new FormControl('',[Validators.required,Validators.minLength(6)]),
      sSingers: new FormControl('',[Validators.required]),
      sAlbum: new FormControl('',[Validators.required]),
      sgenre: new FormControl([Validators.required]),
      slength: new FormControl('',[Validators.required]),
      sURL:new FormControl('',[Validators.required])
      
   });
   
 this.sub=this._Activatedroute.paramMap.forEach(
   params=>{
     console.log(params);
     this.id = params.get('id');
     console.log(this.id);
    
   }
 );
 this.dataService.getdata().subscribe(data=>{
  this.mus = data as string[]
  
  this.ID = this.mus.find(card=> card.id == this.id);
  console.log(this.ID);
  this.SongsForm.setValue({
    sSong:this.ID.Song,
    sSingers:this.ID.Singers,
    sAlbum:this.ID.Album,
    slength:this.ID.length,
    sgenre:this.ID.genre,
    sURL:this.ID.URL

  });
  
}
 )
   
}
  

  
 
  addDetails(){
         
    this.dataService.addSong(this.sSong,this.sAlbum,this.sSingers,this.slength,this.sgenre,this.sURL,this.sisselected).subscribe(
     result => {
       alert("successfully added the song")
       this.router.navigate(['Songss'])
      
      },
     
 );
   
 

 }
  

}
