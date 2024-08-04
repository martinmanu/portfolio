import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css'],
})
export class LeafletMapComponent implements OnInit {
  private map: L.Map | undefined;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
    this.loadHardcodedLocation();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0], // Initial center position
      zoom: 2,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  private loadHardcodedLocation(): void {
    const latLng = L.latLng(9.479277, 76.582997);

    if (this.map) {
      this.map.setView(latLng, 13);

      const markerIcon = L.icon({
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.marker(latLng, { icon: markerIcon })
        .addTo(this.map)
        .bindPopup('Find me here')
        .openPopup();
    }
  }
}
