import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUComponent } from './vista-u.component';

describe('VistaUComponent', () => {
  let component: VistaUComponent;
  let fixture: ComponentFixture<VistaUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
