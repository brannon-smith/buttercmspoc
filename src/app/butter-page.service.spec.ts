import { TestBed } from '@angular/core/testing';

import { ButterPageService } from './butter-page.service';

describe('ButterPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButterPageService = TestBed.get(ButterPageService);
    expect(service).toBeTruthy();
  });
});
