import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingDetails } from './clothing-details';

describe('ClothingDetails', () => {
  let component: ClothingDetails;
  let fixture: ComponentFixture<ClothingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothingDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ClothingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
