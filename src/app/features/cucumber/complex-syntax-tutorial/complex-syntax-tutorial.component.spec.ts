import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComplexSyntaxTutorialComponent} from './complex-syntax-tutorial.component';

describe('ComplexSyntaxTutorialComponent', () => {
  let component: ComplexSyntaxTutorialComponent;
  let fixture: ComponentFixture<ComplexSyntaxTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexSyntaxTutorialComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexSyntaxTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
