import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatselectComponent } from './test-matselect.component';

describe('TestMatselectComponent', () => {
  let component: TestMatselectComponent;
  let fixture: ComponentFixture<TestMatselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMatselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMatselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
