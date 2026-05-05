import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingSearch } from './clothing-search';

describe('ClothingSearch', () => {
  let component: ClothingSearch;
  let fixture: ComponentFixture<ClothingSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothingSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(ClothingSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
