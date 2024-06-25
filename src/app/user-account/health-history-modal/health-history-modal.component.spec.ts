import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthHistoryModalComponent } from './health-history-modal.component';

describe('HealthHistoryModalComponent', () => {
  let component: HealthHistoryModalComponent;
  let fixture: ComponentFixture<HealthHistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthHistoryModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
