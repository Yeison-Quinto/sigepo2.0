/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarraAdmiComponent } from './barraAdmi.component';

describe('BarraAdmiComponent', () => {
  let component: BarraAdmiComponent;
  let fixture: ComponentFixture<BarraAdmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraAdmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
