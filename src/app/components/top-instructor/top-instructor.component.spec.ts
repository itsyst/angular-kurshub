import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInstructorComponent } from './top-instructor.component';

describe('TopInstructorComponent', () => {
  let component: TopInstructorComponent;
  let fixture: ComponentFixture<TopInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopInstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
