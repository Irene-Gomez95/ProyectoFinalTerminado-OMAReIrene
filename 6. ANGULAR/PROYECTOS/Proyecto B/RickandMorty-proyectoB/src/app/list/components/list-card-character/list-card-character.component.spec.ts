import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardCharacterComponent } from './list-card-character.component';

describe('ListCardCharacterComponent', () => {
  let component: ListCardCharacterComponent;
  let fixture: ComponentFixture<ListCardCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCardCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
