import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './weather/weather-component/weather-component.component';
import { NewNotesComponent } from './Notes/new-notes/new-notes.component';
import { SavedNotesComponent } from './Notes/saved-notes/saved-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    NewNotesComponent,
    SavedNotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
