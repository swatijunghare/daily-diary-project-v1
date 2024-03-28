import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTLoginComponent } from './vt-login.component';

describe('VTLoginComponent', () => {
  let component: VTLoginComponent;
  let fixture: ComponentFixture<VTLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
