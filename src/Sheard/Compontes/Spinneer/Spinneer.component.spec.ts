/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpinneerComponent } from './Spinneer.component';

describe('SpinneerComponent', () => {
  let component: SpinneerComponent;
  let fixture: ComponentFixture<SpinneerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinneerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinneerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
