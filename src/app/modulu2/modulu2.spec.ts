import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulu2 } from './modulu2';

describe('Modulu2', () => {
  let component: Modulu2;
  let fixture: ComponentFixture<Modulu2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modulu2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulu2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
