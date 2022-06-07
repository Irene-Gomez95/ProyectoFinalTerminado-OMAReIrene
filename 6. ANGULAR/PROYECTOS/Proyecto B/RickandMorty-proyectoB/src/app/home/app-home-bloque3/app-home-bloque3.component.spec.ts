import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeBloque3Component } from './app-home-bloque3.component';

describe('AppHomeBloque3Component', () => {
  let component: AppHomeBloque3Component;
  let fixture: ComponentFixture<AppHomeBloque3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHomeBloque3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeBloque3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
