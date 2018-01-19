# ZooApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes

### Features to Implement:

- [ ] Zoo staff should be able to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sec, one like and one dislike.

- [ ] Zoo staff should be able to view a list of animals that have been logged.

- [ ] Zoo staff should be able to filter displayed animals by showing all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).

- [ ] Zoo staff should be able to click an animal to edit its name, age or caretakers.

### Application Structure:

- Root Component
  - Animal List
  - New Animal Form
  - Edit Animal Form
- Animal Age Pipe
- Animal Class

### Feature Wishlist

The following are features that I'd like to implement in the event that the app is approved for a larger project:

- Include photos of each animal as a part of the displayed animal information
- Implement SASS architecture and styling
- Filter displayed animals by diet (herbivore, carnivore, omnivore)
- Include a field for each animal that shows when they were admitted. This should be automatically included by the app at the time of the animal's admittance and also be editable by users after the fact.

### Research Conducted

I ran into an issue while implementing the new animal form. Unlike most of the examples projects I have participated in up until now, Animal objects require a lot of arguments to construct. So naturally the form to collect user input for a new animal has a lot of input field values to read in. In the past we've eschewed <form> elements and simply read each input individually at the time the user submits it. This implementation seems to messy to use with the Animal data model.

Long story short, I'm looking for a way to read in all the form inputs with minimal code in the new-animal view template - ideally with a single statement instead of listing every input field individually in the click-handler directive.
