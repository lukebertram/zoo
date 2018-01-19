import { Component } from '@angular/core';
import { Animal }    from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoo Lord';
  selectedAnimal: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", ["Cool shade"], ["Loud noises"]),
    new Animal("Ocelot", "Revolver", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", ["Laying in the sunshine", "Gun tricks"], ["Toys that are not rope-based"]),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", ["Delicate roots and leaves"], ["Loud noises"])
  ];
}
