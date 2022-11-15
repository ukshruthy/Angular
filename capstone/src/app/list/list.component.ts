import { Component, OnInit ,OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dataService:DataService,private router:Router) { 
    //this.dataService.addNew1(localStorage.getItem('playlist'));

  }
play;
isplay:boolean;
mus:any[]=[];
  ngOnInit(): void {
  
this.mus = JSON.parse(localStorage.getItem('playlist'));
  
   console.log(this.mus);
     
}
delete(){
 localStorage.removeItem('playlist');
 if(confirm("Delete songs From your Playlist...")){
  this.router.navigate(['Songss']);
 }
 else{
this.router.navigate(['list']);
 }
 
}

}
