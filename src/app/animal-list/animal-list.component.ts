import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {

  filterByAge: string = "all";
  @Input() childAnimalList: Animal[];
  @Output() editClick = new EventEmitter();
  @Output() addClick = new EventEmitter();

  constructor() { }

  editButtonClicked(animalToEdit: Animal){
    this.editClick.emit(animalToEdit);
  }

  filterChange(optionFromMenu: string){
    this.filterByAge = optionFromMenu;
  }

  addNewAnimalClicked(){
    this.addClick.emit();
  }
}
