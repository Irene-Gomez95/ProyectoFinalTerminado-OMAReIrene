import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeBloque1Component } from './app-home-bloque1.component';

describe('AppHomeBloque1Component', () => {
  let component: AppHomeBloque1Component;
  let fixture: ComponentFixture<AppHomeBloque1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHomeBloque1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeBloque1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
