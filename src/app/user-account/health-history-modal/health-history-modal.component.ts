import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-health-history-modal',
  templateUrl: './health-history-modal.component.html',
  styleUrls: ['./health-history-modal.component.css']
})
export class HealthHistoryModalComponent {
  @Input() healthHistories: any[] = [];  // Initialize with an empty array
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
