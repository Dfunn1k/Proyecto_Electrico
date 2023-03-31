import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMotorComponent } from './dashboard-motor.component';

describe('DashboardMotorComponent', () => {
  let component: DashboardMotorComponent;
  let fixture: ComponentFixture<DashboardMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMotorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
