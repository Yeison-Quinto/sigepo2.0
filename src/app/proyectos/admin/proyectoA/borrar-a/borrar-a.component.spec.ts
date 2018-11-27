import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAComponent } from './borrar-a.component';

describe('BorrarAComponent', () => {
  let component: BorrarAComponent;
  let fixture: ComponentFixture<BorrarAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
