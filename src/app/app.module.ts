import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtistExplorerComponent } from './artist-explorer/artist-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
