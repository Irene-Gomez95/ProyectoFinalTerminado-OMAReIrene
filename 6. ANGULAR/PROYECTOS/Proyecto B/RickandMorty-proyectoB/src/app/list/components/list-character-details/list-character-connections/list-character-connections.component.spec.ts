import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterConnectionsComponent } from './list-character-connections.component';

describe('ListCharacterConnectionsComponent', () => {
  let component: ListCharacterConnectionsComponent;
  let fixture: ComponentFixture<ListCharacterConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterConnectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
