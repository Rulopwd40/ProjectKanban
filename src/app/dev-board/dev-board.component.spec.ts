import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBoardComponent } from './dev-board.component';

describe('DevBoardComponent', () => {
  let component: DevBoardComponent;
  let fixture: ComponentFixture<DevBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
