import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input('place') place: Place;

  constructor() { }

  ngOnInit() {
  }

}
