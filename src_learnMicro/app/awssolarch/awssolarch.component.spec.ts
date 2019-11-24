import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwssolarchComponent } from './awssolarch.component';

describe('AwssolarchComponent', () => {
  let component: AwssolarchComponent;
  let fixture: ComponentFixture<AwssolarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwssolarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwssolarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
