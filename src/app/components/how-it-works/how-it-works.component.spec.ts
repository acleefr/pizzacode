import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWOrksComponent } from './how-it-works.component';

describe('HowItWOrksComponent', () => {
  let component: HowItWOrksComponent;
  let fixture: ComponentFixture<HowItWOrksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWOrksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWOrksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
