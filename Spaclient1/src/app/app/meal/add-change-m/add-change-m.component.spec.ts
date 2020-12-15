import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangeMComponent } from './add-change-m.component';

describe('AddChangeMComponent', () => {
  let component: AddChangeMComponent;
  let fixture: ComponentFixture<AddChangeMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChangeMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
