import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editClick = new EventEmitter();

  constructor() { }

  editButtonClicked(animalToEdit: Animal){
    this.editClick.emit(animalToEdit);
  }


}
