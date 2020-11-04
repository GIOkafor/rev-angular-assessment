import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistExplorerComponent } from './artist-explorer.component';

describe('ArtistExplorerComponent', () => {
  let component: ArtistExplorerComponent;
  let fixture: ComponentFixture<ArtistExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
