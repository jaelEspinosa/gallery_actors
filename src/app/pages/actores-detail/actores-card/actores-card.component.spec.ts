import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresCardComponent } from './actores-card.component';

describe('ActoresCardComponent', () => {
  let component: ActoresCardComponent;
  let fixture: ComponentFixture<ActoresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
