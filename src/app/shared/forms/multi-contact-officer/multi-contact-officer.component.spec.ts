import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiContactOfficerComponent } from './multi-contact-officer.component';

describe('MultiContactOfficerComponent', () => {
  let component: MultiContactOfficerComponent;
  let fixture: ComponentFixture<MultiContactOfficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiContactOfficerComponent]
    });
    fixture = TestBed.createComponent(MultiContactOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
