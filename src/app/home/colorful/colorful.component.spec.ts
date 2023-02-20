import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulComponent } from './colorful.component';

describe('ColorfulComponent', () => {
  let component: ColorfulComponent;
  let fixture: ComponentFixture<ColorfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
