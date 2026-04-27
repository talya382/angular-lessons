import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMishen } from './list-mishen';

describe('ListMishen', () => {
  let component: ListMishen;
  let fixture: ComponentFixture<ListMishen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMishen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMishen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
