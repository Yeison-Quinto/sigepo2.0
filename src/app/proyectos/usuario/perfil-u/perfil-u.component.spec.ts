import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUComponent } from './perfil-u.component';

describe('PerfilUComponent', () => {
  let component: PerfilUComponent;
  let fixture: ComponentFixture<PerfilUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
