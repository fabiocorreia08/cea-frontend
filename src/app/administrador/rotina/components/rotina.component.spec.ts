import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinaLogComponent } from './rotina.component';

describe('RotinaLogComponent', () => {
  let component: RotinaLogComponent;
  let fixture: ComponentFixture<RotinaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotinaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotinaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
