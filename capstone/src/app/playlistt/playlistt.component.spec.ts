import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlaylisttComponent } from './playlistt.component';

describe('PlaylisttComponent', () => {
  let component: PlaylisttComponent;
  let fixture: ComponentFixture<PlaylisttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ PlaylisttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylisttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should render title in a h2 tag`,()=>{
    const fixture = TestBed.createComponent(PlaylisttComponent);
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const h2: HTMLElement=appElement.querySelector('h2');
    expect(h2.textContent).toBe('My list of Songs');
  });

});
