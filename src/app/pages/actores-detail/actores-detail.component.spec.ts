import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresDetailComponent } from './actores-detail.component';

describe('ActoresDetailComponent', () => {
  let component: ActoresDetailComponent;
  let fixture: ComponentFixture<ActoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
