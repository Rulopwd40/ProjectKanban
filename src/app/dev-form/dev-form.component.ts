import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-dev-form',
  standalone: true,
  imports: [MatFormFieldModule,FormGroup],
  templateUrl: './dev-form.component.html',
  styleUrl: './dev-form.component.css'
})
export class DevFormComponent {

}
