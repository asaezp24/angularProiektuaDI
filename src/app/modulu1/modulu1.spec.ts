import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulu1 } from './modulu1';

describe('Modulu1', () => {
  let component: Modulu1;
  let fixture: ComponentFixture<Modulu1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulu1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulu1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
