import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickstartBoxComponent } from './quickstart-box.component';

describe('QuickstartBoxComponent', () => {
  let component: QuickstartBoxComponent;
  let fixture: ComponentFixture<QuickstartBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickstartBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickstartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
