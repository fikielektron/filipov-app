import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesnoJajeComponent } from './desno-jaje.component';

describe('DesnoJajeComponent', () => {
  let component: DesnoJajeComponent;
  let fixture: ComponentFixture<DesnoJajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesnoJajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesnoJajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
