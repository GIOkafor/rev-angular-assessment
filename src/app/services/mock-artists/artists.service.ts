import { Injectable } from '@angular/core';

import { BurnaBoyProfile } from './burna-boy-profile';
import { DrakeProfile } from './drake-profile';
import { Fm84Profile } from './fm-84-profile';
import { WeekndProfile } from './weeknd-profile';
import { LilTjayProfile } from './liltjay-profile';

import { DrakeTracks } from './drake-tracks-mock-data';
import { WeekndTracks } from './weeknd-mock-tracks';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { }

  getAllArtists(){
    return [
      {...BurnaBoyProfile, tracks: []},
      {...DrakeProfile, ...DrakeTracks},
      {...Fm84Profile, tracks: []},
      {...WeekndProfile, ...WeekndTracks},
      {...LilTjayProfile, tracks: []}
    ];
  }

  getArtistProfile(artistId): any{
    const artists = this.getAllArtists();
    return artists.find(artist => artist.data.artist.id === artistId);
  }

  getArtistMusic(artistId){
    const artists = this.getAllArtists();
    return artists.find(artist => artist.data.artist.id === artistId).tracks;
  }
}