import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatecardComponent } from './statecard.component';

describe('StatecardComponent', () => {
  let component: StatecardComponent;
  let fixture: ComponentFixture<StatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
