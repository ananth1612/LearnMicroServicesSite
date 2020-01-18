import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroservicesintroComponent } from './microservicesintro.component';

describe('MicroservicesintroComponent', () => {
  let component: MicroservicesintroComponent;
  let fixture: ComponentFixture<MicroservicesintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroservicesintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroservicesintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
