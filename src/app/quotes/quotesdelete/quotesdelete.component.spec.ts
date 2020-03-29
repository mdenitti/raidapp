import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesdeleteComponent } from './quotesdelete.component';

describe('QuotesdeleteComponent', () => {
  let component: QuotesdeleteComponent;
  let fixture: ComponentFixture<QuotesdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
