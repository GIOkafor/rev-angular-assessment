import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  @Input() tracks: any;
  audioPlayer: any;
  playingSource: String;

  constructor() { }

  ngOnInit(): void {
    this.audioPlayer = new Audio('');
  }

  pauseAudio(){
    this.audioPlayer.pause();
    this.playingSource = null;
  }

  playTrack(trackSrc){
    this.playingSource = trackSrc;
    this.audioPlayer.src = trackSrc;
    
    this.audioPlayer.play();
  }

  isPlaying(track){
    return (this.playingSource === track);
  }

}
