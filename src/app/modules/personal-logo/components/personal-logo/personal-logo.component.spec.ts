import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLogoComponent } from './personal-logo.component';

describe('PersonalLogoComponent', () => {
  let component: PersonalLogoComponent;
  let fixture: ComponentFixture<PersonalLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
