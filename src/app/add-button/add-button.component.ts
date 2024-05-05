import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  @Output() addStateEvent= new EventEmitter();
  
  onClick(){
    this.addStateEvent.emit();
  }
}
