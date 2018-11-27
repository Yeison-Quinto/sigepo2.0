import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUComponent } from './info-u.component';

describe('InfoUComponent', () => {
  let component: InfoUComponent;
  let fixture: ComponentFixture<InfoUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
