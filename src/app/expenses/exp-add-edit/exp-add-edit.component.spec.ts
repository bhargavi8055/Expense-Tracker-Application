import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAddEditComponent } from './exp-add-edit.component';

describe('ExpAddEditComponent', () => {
  let component: ExpAddEditComponent;
  let fixture: ComponentFixture<ExpAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
