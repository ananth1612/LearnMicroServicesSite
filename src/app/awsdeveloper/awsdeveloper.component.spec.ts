import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsdeveloperComponent } from './awsdeveloper.component';

describe('AwsdeveloperComponent', () => {
  let component: AwsdeveloperComponent;
  let fixture: ComponentFixture<AwsdeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsdeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
