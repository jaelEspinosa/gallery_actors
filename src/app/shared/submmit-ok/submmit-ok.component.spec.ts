import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmmitOKComponent } from './submmit-ok.component';

describe('SubmmitOKComponent', () => {
  let component: SubmmitOKComponent;
  let fixture: ComponentFixture<SubmmitOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmmitOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmmitOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
