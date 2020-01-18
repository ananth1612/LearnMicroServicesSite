import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursescompComponent } from './coursescomp.component';

describe('CoursescompComponent', () => {
  let component: CoursescompComponent;
  let fixture: ComponentFixture<CoursescompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursescompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
