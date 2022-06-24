import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSecurityComponent } from './general-security.component';

describe('GeneralSecurityComponent', () => {
  let component: GeneralSecurityComponent;
  let fixture: ComponentFixture<GeneralSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
