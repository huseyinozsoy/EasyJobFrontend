import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmobileappComponent } from './getmobileapp.component';

describe('GetmobileappComponent', () => {
  let component: GetmobileappComponent;
  let fixture: ComponentFixture<GetmobileappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmobileappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmobileappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
