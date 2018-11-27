import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancesAComponent } from './avances-a.component';

describe('AvancesAComponent', () => {
  let component: AvancesAComponent;
  let fixture: ComponentFixture<AvancesAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvancesAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
