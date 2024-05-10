import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BoardComponent } from '../board/board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CardComponent,BoardComponent,CommonModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  @Input() name: string = '';
  @Input() card: CardComponent= new CardComponent;
  @Input() cardBool: boolean=false;
  @Output() booleanEmitter= new EventEmitter();
  cards: CardComponent[]=[];
  
  onClick(){
    
    if(this.cardBool){
      this.booleanEmitter.emit();
      this.cards.push(this.card);
     }
    
  }
  generateRandomRGBColor(name: string): string {
    switch (name) {
      case 'Backlog':
        return 'rgb(198, 133, 133)';
      case 'To-Do':
        return 'rgb(198, 133, 184)';
      case 'Doing':
        return 'rgb(133, 171, 198)';
      case 'Done':
        return 'rgb(146, 198, 133)';
      default:
        return 'rgb(255, 255, 255)'; // Valor por defecto
    }
  }
}
