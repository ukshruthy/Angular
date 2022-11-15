import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule 
      ],
      declarations: [ AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    Song:String;
  });

  

  it(`should render title in a h3 tag`,()=>{
    const fixture = TestBed.createComponent(AddComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h3: HTMLElement=appElement.querySelector('h3');
    expect(h3.textContent).toBe('Add Song');
  });


  
  
  it(`should render a text box to accept Song Title`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
  });

  it(`should render a submit button`,()=>{
    const com = fixture.nativeElement;
    expect(com.querySelectorAll('button')[0].textContent).toEqual('submit');
  });

 

});
