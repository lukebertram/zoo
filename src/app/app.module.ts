import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewAnimalComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
