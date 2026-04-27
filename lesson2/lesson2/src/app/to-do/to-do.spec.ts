import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODO } from './to-do';

describe('TODO', () => {
  let component: TODO;
  let fixture: ComponentFixture<TODO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TODO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TODO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
