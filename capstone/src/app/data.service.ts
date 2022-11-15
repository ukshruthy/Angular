import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs'
import { tap } from 'rxjs/Operators'


const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public sSong: String;
    public sAlbum: String;
    public sSingers: String;
  public slength: number;
  public sgenre: String;
  public sURL: String;
  isselected:boolean;
   
    mysong: string[] = [];
    
    constructor(private myhttpService: HttpClient) { console.log("In service constructor")}
  
    getdata(){
      console.log('onInit');
    return this.myhttpService.get('http://localhost:3000/Songs');
    }
  
    addSong(sSong:String,sAlbum:String,sSingers:String,slength:number,sgenre:String,sURL:String,isselected:boolean){
      //var obj = {Song: this.sSong, Album:this.sAlbum};
      const body = JSON.stringify({Song:sSong,Album:sAlbum,Singers:sSingers,length:slength,genre:sgenre,URL:sURL,isselected:isselected});
  
      return this.myhttpService.post('http://localhost:3000/Songs',body, httpOptions);
    }
  
       editentry(sSong:String,sAlbum:String,sSingers:String,slength:number,sgenre:String,sURL:String,isselected:boolean)
       {
        //  Song.Song = Song.Song + "a";
        //  var obj = { Song: Song.Song, Album:Song.Album};
        //var obj = {  }
         const body = JSON.stringify({Song:sSong,Album:sAlbum,Singers:sSingers,length:slength,genre:sgenre,URL:sURL,isselected:isselected});
  
        return this.myhttpService.put('http://localhost:3000/Songs',body, httpOptions);
  
       }
      
          deleteentry(id)
          {
            const url =`http://localhost:3000/Songs/${id}`;
          return this.myhttpService.delete(url,httpOptions);
          }

          getData(id){
            const url =`http://localhost:3000/Songs/${id}`;
            return this.myhttpService.get(url,httpOptions);
          }
        

         public sEmail:string;
         public sPassword :string;
         public sFname :string;
         public sLname :string;
         public sLocation :string;
         public sMobile :number;

         getdata1(){
          console.log('onInit');
        return this.myhttpService.get('http://localhost:3000/Data');
       
        }

        addData(sEmail:string, sPassword :string, sFname :string,sLname :string,sLocation :string,sMobile :number){

          const body = JSON.stringify({Email:sEmail,Password:sPassword,Fname:sFname,Lname:sLname,Location:sLocation,Mobile:sMobile});
          return this.myhttpService.post('http://localhost:3000/Data',body, httpOptions);
        }
        user(sEmail:string, sPassword :string){
          //const url =`http://localhost:3000/Data/${id}`;
          const body = JSON.stringify({Email:sEmail,Password:sPassword});
          return this.myhttpService.get('http://localhost:3000/Data');
        }
        
   

    
      
}
