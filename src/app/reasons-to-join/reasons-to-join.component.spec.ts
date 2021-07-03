import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsToJoinComponent } from './reasons-to-join.component';

describe('ReasonsToJoinComponent', () => {
  let component: ReasonsToJoinComponent;
  let fixture: ComponentFixture<ReasonsToJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsToJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsToJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
