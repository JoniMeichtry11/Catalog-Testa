import { TestBed } from '@angular/core/testing';

import { BudgetImageService } from './budget-image.service';

describe('BudgetImageService', () => {
  let service: BudgetImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
