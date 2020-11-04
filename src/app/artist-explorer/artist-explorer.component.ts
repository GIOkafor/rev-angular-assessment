import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/mock-artists/artists.service';

@Component({
  selector: 'artist-explorer',
  templateUrl: './artist-explorer.component.html',
  styleUrls: ['./artist-explorer.component.css']
})
export class ArtistExplorerComponent implements OnInit {

  artists: any;

  constructor(
    private artistsService: ArtistsService
  ) { 
    this.artists = this.artistsService.getAllArtists();
  }

  ngOnInit(): void {
  }

  selectArtist(artistId){
    console.log('selected artist id: ', artistId);
    //console.log('artist music is: ', this.artistsService.getArtistMusic(artistId));
    //console.log('artist data is: ', this.artistsService.getArtistProfile(artistId));
  }

}
