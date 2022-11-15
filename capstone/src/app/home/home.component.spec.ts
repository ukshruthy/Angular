import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title in a h3 tag`,()=>{
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h3: HTMLElement=appElement.querySelector('h3');
    expect(h3.textContent).toBe(' Multi-Songs');
  });

  it(`should render title in a h1 tag`,()=>{
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h1: HTMLElement=appElement.querySelector('h1');
    expect(h1.textContent).toBe('Play Online!');
  });
 
  it(`should render title in a h4 tag`,()=>{
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h4: HTMLElement=appElement.querySelector('h4');
    expect(h4.textContent).toBe('Recommended songs');
  });

  
});
