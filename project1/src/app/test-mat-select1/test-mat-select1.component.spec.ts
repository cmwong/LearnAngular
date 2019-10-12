import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatSelect1Component } from './test-mat-select1.component';

describe('TestMatSelect1Component', () => {
  let component: TestMatSelect1Component;
  let fixture: ComponentFixture<TestMatSelect1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatSelect1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatSelect1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
