import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBackGroundComponent } from './change-back-ground.component';

describe('ChangeBackGroundComponent', () => {
  let component: ChangeBackGroundComponent;
  let fixture: ComponentFixture<ChangeBackGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBackGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBackGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
