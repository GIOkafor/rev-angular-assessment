import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistExplorerComponent } from './artist-explorer/artist-explorer.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';

const routes: Routes = [
  { path: 'artist-profile/:id', component: ArtistProfileComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
