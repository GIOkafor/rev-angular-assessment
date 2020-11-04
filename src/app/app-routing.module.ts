import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistExplorerComponent } from './artist-explorer/artist-explorer.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';

const routes: Routes = [
  { path: 'discover', component: ArtistExplorerComponent, children: [
      { path: 'artist-profile/:id', component: ArtistProfileComponent },
    ] 
  },
  { path: '', redirectTo: 'discover', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
