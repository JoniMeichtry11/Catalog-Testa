import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPreview } from './budget-preview';

describe('BudgetPreview', () => {
  let component: BudgetPreview;
  let fixture: ComponentFixture<BudgetPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
