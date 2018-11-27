import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerUComponent } from './editar-per-u.component';

describe('EditarPerUComponent', () => {
  let component: EditarPerUComponent;
  let fixture: ComponentFixture<EditarPerUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
