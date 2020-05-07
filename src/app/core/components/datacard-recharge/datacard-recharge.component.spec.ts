import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacardRechargeComponent } from './datacard-recharge.component';

describe('DatacardRechargeComponent', () => {
  let component: DatacardRechargeComponent;
  let fixture: ComponentFixture<DatacardRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacardRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacardRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
