import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoresUComponent } from './gestores-u.component';

describe('GestoresUComponent', () => {
  let component: GestoresUComponent;
  let fixture: ComponentFixture<GestoresUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoresUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoresUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
