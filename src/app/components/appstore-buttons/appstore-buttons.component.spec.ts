import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstoreButtonsComponent } from './appstore-buttons.component';

describe('AppstoreButtonsComponent', () => {
  let component: AppstoreButtonsComponent;
  let fixture: ComponentFixture<AppstoreButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppstoreButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppstoreButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
