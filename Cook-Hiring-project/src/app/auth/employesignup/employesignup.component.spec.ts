import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployesignupComponent } from './employesignup.component';

describe('EmployesignupComponent', () => {
  let component: EmployesignupComponent;
  let fixture: ComponentFixture<EmployesignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployesignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployesignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
