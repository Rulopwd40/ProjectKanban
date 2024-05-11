import { Component, Input, ViewChild } from '@angular/core';
import { DevBoardComponent } from '../dev-board/dev-board.component';

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
  imports: [DevBoardComponent,StateComponent,CommonModule,MatFormFieldModule,MatInputModule, FormsModule, ReactiveFormsModule,CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  @ViewChild(DevBoardComponent)devBoardComponent: DevBoardComponent = new DevBoardComponent;
  @ViewChild(StateComponent)stateComponent: StateComponent = new StateComponent;
  states: string[] = ["Backlog", "To-Do", "Doing", "Done"];
  addBtt=false;
  openForm=false;
  openStateF=false;
  formData: any= {};
  stateFormdata: any={};
  card: CardComponent = new CardComponent;
  cardBool=false;
  selectDevM=false;
  listenFormEvent(){
    this.openForm=true;
  }
  submitForm(event: any) {
    event.preventDefault();
    
    if(this.formData.name!=undefined && this.formData.surname!=undefined && this.formData.rol!=undefined){
      this.devBoardComponent.cardListener();
      this.openForm = false; // Cerrar el formulario después de enviar
    }
    else{
      alert('Campo Vacío');
    }
  }
  FormClose(){
    this.openForm=false;
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

  openStateForm(){
    this.openStateF=true;
  }
  submitStateForm(event: any) {
    event.preventDefault();
    let temp=this.devBoardComponent.obtainDev(this.stateFormdata.dev);
    if(this.stateFormdata.taskname!=undefined && this.stateFormdata.description!=undefined && temp){
      this.stateComponent.cardListener();
      this.openStateF = false; // Cerrar el formulario después de enviar
    }
    else{
      if(!temp)alert('Campo Vacío');
    }
  }
  closeStateForm(){
    this.openStateF=false;
    
  }
  selectDev(){
    
  }
}