import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsLoyaltyComponent } from './earnings-loyalty.component';

describe('EarningsLoyaltyComponent', () => {
  let component: EarningsLoyaltyComponent;
  let fixture: ComponentFixture<EarningsLoyaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsLoyaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
