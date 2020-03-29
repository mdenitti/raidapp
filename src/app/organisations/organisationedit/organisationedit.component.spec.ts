import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationeditComponent } from './organisationedit.component';

describe('OrganisationeditComponent', () => {
  let component: OrganisationeditComponent;
  let fixture: ComponentFixture<OrganisationeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
