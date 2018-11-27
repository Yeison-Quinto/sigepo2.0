import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancesUComponent } from './avances-u.component';

describe('AvancesUComponent', () => {
  let component: AvancesUComponent;
  let fixture: ComponentFixture<AvancesUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvancesUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancesUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
