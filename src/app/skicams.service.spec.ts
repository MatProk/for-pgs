import { TestBed } from '@angular/core/testing';

import { SkicamsService } from './skicams.service';

describe('SkicamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkicamsService = TestBed.get(SkicamsService);
    expect(service).toBeTruthy();
  });
});
