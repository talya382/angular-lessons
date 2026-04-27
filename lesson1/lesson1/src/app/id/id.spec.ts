import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id } from './id';

describe('Id', () => {
  let component: Id;
  let fixture: ComponentFixture<Id>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Id]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
