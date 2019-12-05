import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyStatesComponent } from './emergency-states.component';

describe('EmergencyStatesComponent', () => {
  let component: EmergencyStatesComponent;
  let fixture: ComponentFixture<EmergencyStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
