import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCallComponent } from './action-call.component';

describe('ActionCallComponent', () => {
  let component: ActionCallComponent;
  let fixture: ComponentFixture<ActionCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
