import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterImageComponent } from './list-character-image.component';

describe('ListCharacterImageComponent', () => {
  let component: ListCharacterImageComponent;
  let fixture: ComponentFixture<ListCharacterImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
