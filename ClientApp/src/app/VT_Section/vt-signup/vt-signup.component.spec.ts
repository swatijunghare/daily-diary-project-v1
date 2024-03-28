import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTSignupComponent } from './vt-signup.component';

describe('VTSignupComponent', () => {
  let component: VTSignupComponent;
  let fixture: ComponentFixture<VTSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
