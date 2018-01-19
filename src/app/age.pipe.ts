import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[]) {
    // const output: Animal[] = [];
    // input.forEach((animal)=>{
    //   if (animal.age < 2){
    //     output.push(animal);
    //   }
    // })
    return input.filter((animal) => animal.age <= 2);
  }
}
