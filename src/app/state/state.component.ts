import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  @Input() name: string = '';
}
