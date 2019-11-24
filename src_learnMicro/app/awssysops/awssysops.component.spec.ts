import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwssysopsComponent } from './awssysops.component';

describe('AwssysopsComponent', () => {
  let component: AwssysopsComponent;
  let fixture: ComponentFixture<AwssysopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwssysopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwssysopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
