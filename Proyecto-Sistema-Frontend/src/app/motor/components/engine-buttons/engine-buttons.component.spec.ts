import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineButtonsComponent } from './engine-buttons.component';

describe('EngineButtonsComponent', () => {
  let component: EngineButtonsComponent;
  let fixture: ComponentFixture<EngineButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
