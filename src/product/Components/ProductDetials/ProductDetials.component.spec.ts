/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductDetialsComponent } from './ProductDetials.component';

describe('ProductDetialsComponent', () => {
  let component: ProductDetialsComponent;
  let fixture: ComponentFixture<ProductDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
