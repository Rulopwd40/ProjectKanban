import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dev-board',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './dev-board.component.html',
  styleUrl: './dev-board.component.css'
})
export class DevBoardComponent {
 @Input() formData: any;
 cards: CardComponent[] = [];
 id: number=1;
 @Output() openFormEvent= new EventEmitter();
 
  FormEvent(){
    this.openFormEvent.emit();
 }
  cardListener() {
  if (this.formData) {
    const card = new CardComponent(); // Crear una nueva instancia de CardComponent
    card.name = this.formData.name;
    card.surname = this.formData.surname;
    card.rol = this.formData.rol;
    card.id = this.id.toString();
    this.id = this.id + 1;
    this.cards.push(card); // Agregar la nueva tarjeta al arreglo de tarjetas
  }
}
}
