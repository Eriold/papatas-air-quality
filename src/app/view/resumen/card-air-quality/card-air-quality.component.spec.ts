import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAirQualityComponent } from './card-air-quality.component';

describe('CardAirQualityComponent', () => {
  let component: CardAirQualityComponent;
  let fixture: ComponentFixture<CardAirQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAirQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAirQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
