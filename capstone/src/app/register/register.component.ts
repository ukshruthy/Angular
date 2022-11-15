import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup , FormControl,Validators,AbstractControl,NG_VALIDATORS} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService: DataService) { }
  SongsForm: FormGroup;
  
  public sEmail:string;
  public sPassword :string;
  public sFname :string;
  public sLname :string;
  public sLocation :string;
  public sMobile :number;
  addData:any[]=[];
  Location: string[]=["","TamilNadu","Karnataka","Delhi","Hyderabad","Pune"];
  register(){

    this.dataService.addData(this.sEmail,this.sPassword,this.sFname,this.sLname,this.sLocation,this.sMobile).subscribe(
      result => {alert("successfully added the Data")},
      
    );
    console.log(this.addData);
  }

  ngOnInit(): void {


    this.SongsForm = new FormGroup({
      Email: new FormControl('',[Validators.required,Validators.minLength(6)]),
      Password: new FormControl('',[Validators.required]),
      Fname: new FormControl('',[Validators.required]),
      Lname: new FormControl([Validators.required]),
      Location: new FormControl('',[Validators.required]),
      Mobile:new FormControl('',[Validators.required])

  })

  

 



  }
}