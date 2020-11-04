import { TestBed } from '@angular/core/testing';

import { MockArtistsService } from './mock-artists.service';

describe('MockArtistsService', () => {
  let service: MockArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
