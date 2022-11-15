import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title in a h3 tag`,()=>{
    const fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h3: HTMLElement=appElement.querySelector('h3');
    expect(h3.textContent).toBe(`Please sign up for BlueMoon It's free!`);
  });

  it(`should render a text box to accept First name`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][placeholder ="First Name"]')).toBeTruthy();
  });

  it(`should render a text box to accept Last name`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][placeholder ="Last Name"]')).toBeTruthy();
  });

  it(`should render a text box to accept Email Address`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][placeholder ="Email Address"]')).toBeNull();
  });

  it(`should render a text box to accept Password`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][placeholder ="Password"]')).toBeNull();
  });

  it(`should render a text box to accept input`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
  });

  it(`should render a submit button`,()=>{
    const com = fixture.nativeElement;
    expect(com.querySelectorAll('button')[0].textContent).toEqual('Submit');
  });
});
