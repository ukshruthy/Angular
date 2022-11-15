import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-playlistt',
  templateUrl: './playlistt.component.html',
  styleUrls: ['./playlistt.component.css']
})
export class PlaylisttComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,private router:Router,private dataService:DataService){}

  @Input() SelectedSongs : any;
  @Input() PlayListAddButtons:boolean;
PlaylistAdded:boolean=false;
mysong:any=[];
public sSong: String;
public sAlbum: String;
public sSingers: String;
public slength: any;
public sgenre: String;
public sURL: String;
public isselected:boolean;
mus:any[]=[];
ID;
isplay:boolean;

//PlayListAddButtons:boolean=false;
  ngOnInit(): void {
    
    // if(localStorage.getItem('playlist')){
    //   this.isplay=true;
    // }
    
    
  }
  ngOnChanges(){
    
    this.mysong=this.SelectedSongs;
    this.PlaylistAdded=this.PlayListAddButtons;
 console.log(this.PlaylistAdded);
   
    //this.router.navigate(['Songs/:Play']);
    //console.log(this.PlaylistAdded);
   
  }
 
}
