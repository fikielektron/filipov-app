import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevoJajeComponent } from './levo-jaje.component';

describe('LevoJajeComponent', () => {
  let component: LevoJajeComponent;
  let fixture: ComponentFixture<LevoJajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevoJajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevoJajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
