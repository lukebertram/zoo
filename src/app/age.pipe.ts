import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], ageRange: string) {
    if (ageRange === 'young'){
      //filter out all animals 2 yrs old or older
      return input.filter((animal) => animal.age < 2);
    } else if (ageRange === 'mature'){
      //filter out all animals younger than 2 yrs old
      return input.filter((animal) => animal.age >= 2)
    } else {
      return input;
    }
  }
}
