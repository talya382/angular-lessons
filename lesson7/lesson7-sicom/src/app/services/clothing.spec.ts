import { TestBed } from '@angular/core/testing';

import { Clothing } from './clothing';

describe('Clothing', () => {
  let service: Clothing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Clothing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
