import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPayComponent } from './loan-pay.component';

describe('LoanPayComponent', () => {
  let component: LoanPayComponent;
  let fixture: ComponentFixture<LoanPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
