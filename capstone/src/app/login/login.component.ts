import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/Operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  SongsForm: FormGroup;

  public sEmail:string;
  public sPassword:string;
  
         public sFname :string;
         public sLname :string;
         public sLocation :string;
         public sMobile :number;
  login1:any;
  mus:any[]=[];
  constructor(private _fb: FormBuilder, private dataService: DataService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.dataService.getdata1().subscribe( data => {
                this.login1 = data as string[]
              console.log(this.login1);

               });

    console.log('login Component Running...');
    this.SongsForm = new FormGroup({
      
      Email: new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required])
     
    });
   
  }
ID;

username;


isloggedIn:boolean;


login(sEmail,sPassword){
  //this.isloggedIn=true;
  for(let i=0 ; i<=this.login1.length; i++)
  {
      if (this.login1[i].Email === sEmail && this.login1[i].Password === sPassword)
      {

         this.login1[i].isloggedIn=true;
        this.isloggedIn=true;
        
        alert("Successfully LoggedIn");
        this.router.navigate(['Songss']);
       localStorage.setItem('currentUser',JSON.stringify(this.login1[0].Fname));
      //localStorage.getItem('isloggedIn');
       localStorage.setItem('id',JSON.stringify(this.login1[0].id));
       // console.log("User Found" , this.login1[i]);
         
          
       
        
         
     
    }
      else{
        console.log('wrong user');
        alert("UserName and password error");
        this.isloggedIn=false;
       console.log(this.login1[i]);
       localStorage.setItem('login1[i]',JSON.stringify(this.login1[i]));
      }
     
  }    

 
}
}

        
