import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power-quality',
  templateUrl: './power-quality.component.html',
  styleUrls: ['./power-quality.component.scss']
})
export class PowerQualityComponent {

  @Output() close = new EventEmitter<void>();

  onCerrar() {
    this.close.emit();
  }

}
