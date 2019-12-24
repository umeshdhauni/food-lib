import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-branch-location',
  templateUrl: './branch-location.component.html',
  styleUrls: ['./branch-location.component.scss']
})
export class BranchLocationComponent implements OnInit {
  addresses=[
    {
      icon:'',
      city:'Banglore',
      address:'16th Cross Rd, Sector-IV, HSR Layout, Bengaluru, Karnataka 560102',
      lat:'12.9715964',
      long:'77.5595431'
    },
    {
      icon:'',
      city:'Delhi',
      address:'13,PNB Road Gyan Khand 2,Nirman Vihar Delhi',
      lat:'28.6862693',
      long:'77.1867636'
    },
    {
      icon:'',
      city:'Kolkata',
      address:'16th Cross Rd, Sector-IV, HSR Layout, Bengaluru, Karnataka 560102',
      lat:'16.7049844',
      long:'74.2082331'
    }
  ]
  map:any;
  @ViewChild('map',{static:true}) mapElement: ElementRef;
  markers=[];
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 5,
      disableDefaultUI: true,
      scaleControl: true,
      zoomControl: true,
      center: { lat: 19.7515572, lng: 75.6788688 }
    });

    this.setMarker();
  }

  setMarker(){
    this.addresses.forEach(element =>{
      let location = new google.maps.LatLng(element.lat, element.long);
      this.addMarker(location,'../../assets/marker.png');
    })
  }

  addMarker(location,image){
      let marker = new google.maps.Marker({
        position: location,
        map: this.map,
        icon: image
      }
      );
  
      // this.map.setCenter(location);
      // this.map.panTo(location);
      this.
      markers.push({ marker: marker });
     
  }

}
