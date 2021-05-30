import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPasswordComponent } from './real-password.component';

describe('RealPasswordComponent', () => {
  let component: RealPasswordComponent;
  let fixture: ComponentFixture<RealPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
