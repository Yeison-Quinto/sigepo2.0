import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoresAComponent } from './gestores-a.component';

describe('GestoresAComponent', () => {
  let component: GestoresAComponent;
  let fixture: ComponentFixture<GestoresAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoresAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoresAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
