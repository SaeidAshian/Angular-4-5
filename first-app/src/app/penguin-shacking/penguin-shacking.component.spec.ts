import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinShackingComponent } from './penguin-shacking.component';

describe('PenguinShackingComponent', () => {
  let component: PenguinShackingComponent;
  let fixture: ComponentFixture<PenguinShackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenguinShackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenguinShackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
