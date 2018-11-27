import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAComponent } from './info-a.component';

describe('InfoAComponent', () => {
  let component: InfoAComponent;
  let fixture: ComponentFixture<InfoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
