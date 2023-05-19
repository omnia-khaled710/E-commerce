import { TestBed } from '@angular/core/testing';

import { ShowInCartService } from './show-in-cart.service';

describe('ShowInCartService', () => {
  let service: ShowInCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowInCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
