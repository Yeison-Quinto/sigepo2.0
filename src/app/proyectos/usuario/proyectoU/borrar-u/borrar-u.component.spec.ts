import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarUComponent } from './borrar-u.component';

describe('BorrarUComponent', () => {
  let component: BorrarUComponent;
  let fixture: ComponentFixture<BorrarUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
