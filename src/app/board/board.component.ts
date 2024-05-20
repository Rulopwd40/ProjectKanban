import { Component, ViewChild } from '@angular/core';
import { DevBoardComponent } from '../dev-board/dev-board.component';
import { StateComponent } from '../state/state.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CdkDragDrop, DragDropModule,moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { StatecardComponent } from '../statecard/statecard.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    DevBoardComponent,
    StateComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    DragDropModule,
    StatecardComponent
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @ViewChild(DevBoardComponent) devBoardComponent!: DevBoardComponent;
  @ViewChild(StateComponent) stateComponent!: StateComponent;

  states: string[] = ["Backlog", "To-Do", "Doing", "Done"];
  addBtt = false;
  openForm = false;
  openStateF = false;
  formData: any = {};
  stateFormdata: any = {};
  card: CardComponent = new CardComponent();
  cardBool = false;
  selectDevM = false;
  
  getConnectedDropLists(): string[] {
    return this.states.map(state => `${state}-list`);
  }

  listenFormEvent() {
    this.openForm = true;
  }

  submitForm(event: any) {
    event.preventDefault();
    if (this.formData.name && this.formData.surname && this.formData.rol) {
      this.devBoardComponent.cardListener();
      this.openForm = false;
    } else {
      alert('Campo Vacío');
    }
  }

  FormClose() {
    this.openForm = false;
  }

  handleCardClicked(attributes: any) {
    this.card.name = attributes.name;
    this.card.surname = attributes.surname;
    this.card.rol = attributes.rol;
    this.card.id = attributes.id;
    this.cardBool = true;
  }

  onStateClick() {
    this.cardBool = false;
  }

  openStateForm() {
    this.openStateF = true;
  }

  submitStateForm(event: any) {
    event.preventDefault();
    let temp = this.devBoardComponent.obtainDev(this.stateFormdata.dev);
    if (this.stateFormdata.taskname && this.stateFormdata.description && temp) {
      this.stateComponent.getdev(temp.name + ' ' + temp.id);
      this.stateComponent.cardListener();
      this.openStateF = false;
    } else {
      if (!temp) alert('Campo Vacío');
    }
  }

  closeStateForm() {
    this.openStateF = false;
  }
}