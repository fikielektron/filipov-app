import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenisComponent } from './penis.component';

describe('PenisComponent', () => {
  let component: PenisComponent;
  let fixture: ComponentFixture<PenisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
