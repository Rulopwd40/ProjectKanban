import { Component, EventEmitter, Input, Output, ViewChild, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dev-board',
  standalone: true,
  imports: [CardComponent,CommonModule,MatIconModule],
  templateUrl: './dev-board.component.html',
  styleUrl: './dev-board.component.css'
})
export class DevBoardComponent {
  @ViewChild('boardContainer') boardContainer!: ElementRef;
  @Input() formData: any;
 cards: CardComponent[] = [];
 id: number=1;
 @Output() openFormEvent= new EventEmitter();
 @Output() cardClickedEvent= new EventEmitter();
  FormEvent(){
    this.openFormEvent.emit();
 }
  cardListener() {
  if (this.formData) {
    const card = new CardComponent(); // Crear una nueva instancia de CardComponent
    card.name = this.formData.name;
    card.surname = this.formData.surname;
    card.rol = this.formData.rol;
    card.id = this.id;
    this.id = this.id + 1;
    this.cards.push(card); // Agregar la nueva tarjeta al arreglo de tarjetas
  }
}
//Existe dev?
  obtainDev(id: number){
    let card=this.cards.find(carta => carta.id==id);
    if(card) return true;
    else{
      alert("No existe Developer con ID: " + id);
      return false;
    }
  }


  /*cardClicked(index: number) {
  const clickedCard = this.cards[index];
  const attributes = { // Atributos de la tarjeta clickeada
    name: clickedCard.name,
    surname: clickedCard.surname,
    rol: clickedCard.rol,
    id: clickedCard.id
  };
  this.cardClickedEvent.emit(attributes); // Emitir los atributos de la tarjeta clickeada
}*/
}
