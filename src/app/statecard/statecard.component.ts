import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-statecard',
  standalone: true,
  imports: [],
  templateUrl: './statecard.component.html',
  styleUrl: './statecard.component.css'
})
export class StatecardComponent {
@Input() taskname: string='';
@Input() description: string='';
@Input() dev: string='';
//scale de las cards
@Input() cardSize: number = 1;
}
