import { Component,AfterViewInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit{

  private map;

  lat=33.2707;
  lon=-7.58481;

  private initMap(): void {
    this.map = L.map('map', {center: [ this.lat, this.lon ], zoom: 10 });
    const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
      maxZoom: 100,
      minZoom:1,
    });
    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
