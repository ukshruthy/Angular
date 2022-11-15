import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AbouttComponent } from './aboutt.component';
describe('AbouttComponent', () => {
  let component: AbouttComponent;
  let fixture: ComponentFixture<AbouttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

    it(`should render title in a h1 tag`,()=>{
      const fixture = TestBed.createComponent(AbouttComponent);
      fixture.detectChanges();
      const appElement:HTMLElement = fixture.nativeElement;
      const h1: HTMLElement=appElement.querySelector('h1');
      expect(h1.textContent).toBe('Welcome! to BlueMoon');
    });
    
    it(`should render title in a h5 tag`,()=>{
      const fixture = TestBed.createComponent(AbouttComponent);
      fixture.detectChanges();
      const appElement:HTMLElement = fixture.nativeElement;
      const h5: HTMLElement=appElement.querySelector('h5');
      expect(h5.textContent).toBe('AboutUs');
     
    });
   
    it(`should render title in a h4 tag`,()=>{
      const fixture = TestBed.createComponent(AbouttComponent);
      fixture.detectChanges();
      const appElement:HTMLElement = fixture.nativeElement;
      const h4: HTMLElement=appElement.querySelector('h4');
      expect(h4.textContent).toBe('Terms and Conditions');
    });
   

});
