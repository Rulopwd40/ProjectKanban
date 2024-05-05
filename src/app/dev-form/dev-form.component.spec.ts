import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevFormComponent } from './dev-form.component';

describe('DevFormComponent', () => {
  let component: DevFormComponent;
  let fixture: ComponentFixture<DevFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
