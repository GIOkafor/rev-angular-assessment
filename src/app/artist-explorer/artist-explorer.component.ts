import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/mock-artists/artists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'artist-explorer',
  templateUrl: './artist-explorer.component.html',
  styleUrls: ['./artist-explorer.component.css']
})
export class ArtistExplorerComponent implements OnInit {

  artists: any;
  selectedArtist: any;

  constructor(
    private artistsService: ArtistsService,
    private router: Router
  ) { 
    this.artists = this.artistsService.getAllArtists();
  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if(location.pathname !== '/'){
        this.selectedArtist = location.pathname.split('/artist-profile/')[1];
      }else{
        this.selectedArtist = null;
      }
    });
    
  }

  selectArtist(artistId){
    this.selectedArtist = artistId;
    this.router.navigate(['/artist-profile', artistId]);
  }

}
