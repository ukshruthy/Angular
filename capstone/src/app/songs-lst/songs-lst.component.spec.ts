import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SongsLstComponent } from './songs-lst.component';

describe('SongsLstComponent', () => {
  let component: SongsLstComponent;
  let fixture: ComponentFixture<SongsLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ SongsLstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render title in a h4 tag`,()=>{
    const fixture = TestBed.createComponent(SongsLstComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h4: HTMLElement=appElement.querySelector('h4');
    expect(h4.textContent).toBe('Songs List');
  });

  it(`should render Duration as label`,()=>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual(' Duration');
  });

  it(`should render a  button Playlist`,()=>{
    const com = fixture.nativeElement;
    expect(com.querySelectorAll('button')[0].textContent).toEqual(' Playlist ');
  });

  it(`should render a  button NewSong`,()=>{
    const com = fixture.nativeElement;
    expect(com.querySelectorAll('button')[1].textContent).toEqual(' NewSong');
  });

  it(`should render a  Delete button`,()=>{
    const com = fixture.nativeElement;
    expect(com.querySelectorAll('button')[2].textContent).toEqual(' Delete ');
  });

});
