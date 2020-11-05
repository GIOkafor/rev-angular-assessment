import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  @Input() tracks: any;

  constructor() { }

  ngOnInit(): void {
  }

}
