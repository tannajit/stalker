import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

const incr = 1;
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements AfterViewInit {

  progress = 0;
  qrResultString: string;
  isShown: boolean = false; // hidden by default

  // map
  private map;
  icon = L.icon({
    iconUrl: "assets/green.png",
    iconSize: [12, 12],
  });
  
  location_icon = L.icon({
    iconUrl: "assets/location.png",
    iconSize: [30,30]
  });
  markersCluster = new L.MarkerClusterGroup();
  lat=33.2510054
  lon=-7.6223514

  constructor() { }

  // ngOnInit(): void {
  //   setInterval(() => this.manageProgress(), 150 )
  //   this.initMap()
  // }


  ngAfterViewInit(): void {
    setInterval(() => this.manageProgress(), 150 )
    this.initMap()

  }

  private initMap(): void {
    
    this.map = L.map('map2', {
      center: [this.lat, this.lon],
      zoom: 15,
      zoomControl: false
    });
    
    const zoomOptions = {
      zoomInText: '+',
      zoomOutText: '-',
    };

    // const zoom = L.control.zoom(zoomOptions);


    const tiles = L.tileLayer('https://map.novatis.tech/hot/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 0
    });


    // const locationControl = {
    //   position: 'bottomleft',
    //   strings: {
    //       title: "Show me where I am, yo!"
    //   }}

    // const lc = L.control.locate(locationControl)

    // lc.addTo(this.map);
    // zoom.addTo(this.map);
    tiles.addTo(this.map);
    this.map.addLayer(this.markersCluster);
    this.map.addControl(L.control.zoom({ position: 'bottomleft' }))
    
  }

  manageProgress() {
    if(this.progress === 100) {
      this.progress = 0;
    } else {
      this.progress = this.progress + incr;
    }
  }

  clearResult(): void {
    this.qrResultString = null;
  }
  
  toggleShow() {
    this.isShown = !this.isShown;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

}
