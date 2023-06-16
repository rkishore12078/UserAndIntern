import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIndividualTicketComponent } from './get-individual-ticket.component';

describe('GetIndividualTicketComponent', () => {
  let component: GetIndividualTicketComponent;
  let fixture: ComponentFixture<GetIndividualTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetIndividualTicketComponent]
    });
    fixture = TestBed.createComponent(GetIndividualTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
