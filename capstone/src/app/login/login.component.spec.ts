import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
Song:String;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule 
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it(`should render title in a h2 tag`,()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h2: HTMLElement=appElement.querySelector('h2');
    expect(h2.textContent).toBe('Please Sign In');
  });
 
  it(`should render a text box to accept Label details `,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][placeholder ="Email Address"]')).toBeNull();
  });
 
  it(`should render a Register button`,()=>{
    const com = fixture.nativeElement;
    expect(com.querySelectorAll('a')[0].textContent).toEqual('Register');
  });

  it(`should render a Sign In button`,()=>{
    const com = fixture.nativeElement;
    fixture.debugElement.query(By.css('#btnSubmit'))
    
  });

});
