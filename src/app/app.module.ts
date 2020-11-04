import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtistExplorerComponent } from './artist-explorer/artist-explorer.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';
import { TrackListComponent } from './track-list/track-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtistExplorerComponent,
    ArtistProfileComponent,
    TrackListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
