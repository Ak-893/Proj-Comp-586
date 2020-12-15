import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMComponent } from './display-m.component';

describe('DisplayMComponent', () => {
  let component: DisplayMComponent;
  let fixture: ComponentFixture<DisplayMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
