import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicExplorerComponent } from './music-explorer/music-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
