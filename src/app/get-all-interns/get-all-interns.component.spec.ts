import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllInternsComponent } from './get-all-interns.component';

describe('GetAllInternsComponent', () => {
  let component: GetAllInternsComponent;
  let fixture: ComponentFixture<GetAllInternsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllInternsComponent]
    });
    fixture = TestBed.createComponent(GetAllInternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
