import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerAComponent } from './editar-per-a.component';

describe('EditarPerAComponent', () => {
  let component: EditarPerAComponent;
  let fixture: ComponentFixture<EditarPerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
