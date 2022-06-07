import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterBiographyComponent } from './list-character-biography.component';

describe('ListCharacterBiographyComponent', () => {
  let component: ListCharacterBiographyComponent;
  let fixture: ComponentFixture<ListCharacterBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterBiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
