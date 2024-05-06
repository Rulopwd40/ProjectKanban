import { Component, Input, ViewChild } from '@angular/core';
import { DevBoardComponent } from '../dev-board/dev-board.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { StateComponent } from '../state/state.component';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DevBoardComponent,AddButtonComponent,StateComponent,CommonModule,MatFormFieldModule,MatInputModule, FormsModule, ReactiveFormsModule,CardComponent], // Agrega FormsModule y ReactiveFormsModule
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @ViewChild(DevBoardComponent)devBoardComponent: DevBoardComponent = new DevBoardComponent;
  states: string[] = ["Backlog", "To-Do", "Doing", "Done"];
  addButtonPushed=false;
  addBtt=false;
  openForm=false;
  formData: any= {};
  card: CardComponent = new CardComponent;
  cardBool=false;
  listenAddButton(){
    
    this.addButtonPushed=true;
    
  }
  newState(namestate:string){
    
    this.states.push(namestate);
    this.addButtonPushed=false;
  };
  onInputBlur() {
    this.addButtonPushed = false;
  }
  listenFormEvent(){
    this.openForm=true;
  }
  submitForm(event: Event) {
    event.preventDefault();
    // Guardar los datos del formulario en formData
    // Aquí puedes agregar lógica para validar el formulario si es necesario
    this.devBoardComponent.cardListener();
    this.openForm = false; // Cerrar el formulario después de enviar
  }
  handleCardClicked(attributes:any){
    this.card.name= attributes.name;
    this.card.surname= attributes.surname;
    this.card.rol=attributes.rol;
    this.card.id=attributes.id;
    this.cardBool=true;
  }
  onStateClick(){
    this.cardBool=false;
  }
}