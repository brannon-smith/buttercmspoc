import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterPageComponent } from './butter-page.component';

describe('ButterPageComponent', () => {
  let component: ButterPageComponent;
  let fixture: ComponentFixture<ButterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
