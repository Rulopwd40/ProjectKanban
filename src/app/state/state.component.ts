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

}
