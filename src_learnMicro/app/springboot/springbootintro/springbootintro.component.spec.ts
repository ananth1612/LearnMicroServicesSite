import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringbootintroComponent } from './springbootintro.component';

describe('SpringbootintroComponent', () => {
  let component: SpringbootintroComponent;
  let fixture: ComponentFixture<SpringbootintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringbootintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringbootintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
