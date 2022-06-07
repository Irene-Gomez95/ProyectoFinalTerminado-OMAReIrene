import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeBloque2Component } from './app-home-bloque2.component';

describe('AppHomeBloque2Component', () => {
  let component: AppHomeBloque2Component;
  let fixture: ComponentFixture<AppHomeBloque2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHomeBloque2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeBloque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
