import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Help4uComponent } from './help4u.component';

describe('Help4uComponent', () => {
  let component: Help4uComponent;
  let fixture: ComponentFixture<Help4uComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Help4uComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Help4uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
