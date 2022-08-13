import { ComponentFixture, TestBed } from '@angular/core/testing';

import { scrollProgressBarComponent } from './scroll-progress-bar.component';

describe('scrollProgressBarComponent', () => {
  let component: scrollProgressBarComponent;
  let fixture: ComponentFixture<scrollProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [scrollProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(scrollProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
