import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternTicketComponent } from './intern-ticket.component';

describe('InternTicketComponent', () => {
  let component: InternTicketComponent;
  let fixture: ComponentFixture<InternTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternTicketComponent]
    });
    fixture = TestBed.createComponent(InternTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
