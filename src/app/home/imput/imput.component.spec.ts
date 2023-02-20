import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputComponent } from './imput.component';

describe('ImputComponent', () => {
  let component: ImputComponent;
  let fixture: ComponentFixture<ImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
