/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartBComponent } from './part-b.component';

describe('PartBComponent', () => {
  let component: PartBComponent;
  let fixture: ComponentFixture<PartBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
