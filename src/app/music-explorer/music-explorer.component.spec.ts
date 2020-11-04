import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicExplorerComponent } from './music-explorer.component';

describe('MusicExplorerComponent', () => {
  let component: MusicExplorerComponent;
  let fixture: ComponentFixture<MusicExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
