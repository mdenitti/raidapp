import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidLineChartComponent } from './raid-line-chart.component';

describe('RaidLineChartComponent', () => {
  let component: RaidLineChartComponent;
  let fixture: ComponentFixture<RaidLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
