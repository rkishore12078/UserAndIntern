import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInternComponent } from './individual-intern.component';

describe('IndividualInternComponent', () => {
  let component: IndividualInternComponent;
  let fixture: ComponentFixture<IndividualInternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualInternComponent]
    });
    fixture = TestBed.createComponent(IndividualInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
