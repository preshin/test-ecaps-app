import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DthRechargeComponent } from './dth-recharge.component';

describe('DthRechargeComponent', () => {
  let component: DthRechargeComponent;
  let fixture: ComponentFixture<DthRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DthRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DthRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
