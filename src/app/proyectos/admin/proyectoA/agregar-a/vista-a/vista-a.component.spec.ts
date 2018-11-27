import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAComponent } from './vista-a.component';

describe('VistaAComponent', () => {
  let component: VistaAComponent;
  let fixture: ComponentFixture<VistaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
