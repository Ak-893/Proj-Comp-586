import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangeResComponent } from './add-change-res.component';

describe('AddChangeResComponent', () => {
  let component: AddChangeResComponent;
  let fixture: ComponentFixture<AddChangeResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangeResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangeResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
