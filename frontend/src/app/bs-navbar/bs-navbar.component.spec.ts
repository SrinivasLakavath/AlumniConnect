import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BsNavbarComponent } from './bs-navbar.component';

describe('BsNavbarComponent', () => {
  let component: BsNavbarComponent;
  let fixture: ComponentFixture<BsNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
