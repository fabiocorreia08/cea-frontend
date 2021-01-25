import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentoPeriodoComponent } from './afastamento.component';

describe('AfastamentoPeriodoComponent', () => {
  let component: AfastamentoPeriodoComponent;
  let fixture: ComponentFixture<AfastamentoPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfastamentoPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfastamentoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
