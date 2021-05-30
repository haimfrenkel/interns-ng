import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaier2Component } from './questionnaier2.component';

describe('Questionnaier2Component', () => {
  let component: Questionnaier2Component;
  let fixture: ComponentFixture<Questionnaier2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questionnaier2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
