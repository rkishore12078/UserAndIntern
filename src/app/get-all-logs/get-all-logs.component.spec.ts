import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLogsComponent } from './get-all-logs.component';

describe('GetAllLogsComponent', () => {
  let component: GetAllLogsComponent;
  let fixture: ComponentFixture<GetAllLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllLogsComponent]
    });
    fixture = TestBed.createComponent(GetAllLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
