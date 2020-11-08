import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../services/mock-artists/artists.service';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  artist: any;
  artistTracks: any;
  shortened: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(path => {
      const artistId = path.id;
      this.artist = this.artistService.getArtistProfile(artistId).data.artist;
      this.artistTracks = this.artistService.getArtistMusic(artistId);
    });
  }

}
