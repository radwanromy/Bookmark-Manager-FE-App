import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMarkDashBoardComponent } from './book-mark-dash-board.component';

describe('BookMarkDashBoardComponent', () => {
  let component: BookMarkDashBoardComponent;
  let fixture: ComponentFixture<BookMarkDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMarkDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMarkDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
