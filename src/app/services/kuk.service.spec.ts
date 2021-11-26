import { TestBed } from '@angular/core/testing';

import { KukService } from './kuk.service';

describe('KukService', () => {
  let service: KukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
