import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneEditingSender = new EventEmitter();

  constructor() { }

  doneButtonClicked() {
    this.doneEditingSender.emit();
  }

}
