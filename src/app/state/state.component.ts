import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BoardComponent } from '../board/board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatecardComponent } from '../statecard/statecard.component';
import { DevBoardComponent } from '../dev-board/dev-board.component';
@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CardComponent,BoardComponent,CommonModule,StatecardComponent,DevBoardComponent],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  @Input() name: string = '';
  @Input() cardBool: boolean=false;
  @Input() stateFormData: any;
  @Output() booleanEmitter= new EventEmitter();
  @Output() formEmmiter = new EventEmitter();
  
  statecards: StatecardComponent[]=[];
  
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
  backlog(){
    if(this.name=="Backlog")return true;
    else return false;
  }
  openForm(){
    this.formEmmiter.emit();
  }
  cardListener(){
    if(this.stateFormData){
      const statecard= new StatecardComponent();
      statecard.taskname=this.stateFormData.taskname;
      statecard.description=this.stateFormData.description;
      statecard.dev=this.stateFormData.dev;
      this.statecards.push(statecard)
    }
    
  }
}
