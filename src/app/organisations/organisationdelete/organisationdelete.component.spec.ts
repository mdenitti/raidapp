import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationdeleteComponent } from './organisationdelete.component';

describe('OrganisationdeleteComponent', () => {
  let component: OrganisationdeleteComponent;
  let fixture: ComponentFixture<OrganisationdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
