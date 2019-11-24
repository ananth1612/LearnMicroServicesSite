import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwscloudpractComponent } from './awscloudpract.component';

describe('AwscloudpractComponent', () => {
  let component: AwscloudpractComponent;
  let fixture: ComponentFixture<AwscloudpractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwscloudpractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwscloudpractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
