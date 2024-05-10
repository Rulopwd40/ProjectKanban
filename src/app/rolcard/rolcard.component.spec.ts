import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcardComponent } from './rolcard.component';

describe('RolcardComponent', () => {
  let component: RolcardComponent;
  let fixture: ComponentFixture<RolcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
