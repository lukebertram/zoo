import { Component, Output, EventEmitter} from '@angular/core';
import { Animal } from './../animal.model';

@Component({
  selector: 'new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() cancelNewAnimal = new EventEmitter();

  constructor() { }

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    //split string of comma separated likes into array
    const likesArr: string[] = likes.split(',');
    //split string of comma separated dislikes into array
    const dislikesArr: string[] = dislikes.split(',');
    const newAnimal: Animal = new Animal(
      species,
      name,
      age,
      diet,
      location,
      caretakers,
      sex,
      likesArr,
      dislikesArr
    );
    this.newAnimalSender.emit(newAnimal);
  }

  cancelAddAnimal(){
    this.cancelNewAnimal.emit();
  }
}
