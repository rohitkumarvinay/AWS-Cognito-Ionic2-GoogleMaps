import { Component, Input, OnChanges} from '@angular/core';
import { Geolocation } from 'ionic-native';

/*
  Generated class for the Pickup component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/

declare let google;
declare let Map;

@Component({
  selector: 'pickup',
  templateUrl: 'pickup.html'
})
export class PickupComponent implements OnChanges {

  text: string;
  @Input() isPinSet: boolean;
  @Input() map: google.maps.Map;
  @Input() isPickupRequested: boolean;
  @Input() destination: string;
  
  private pickupMarker: google.maps.Marker;
  private popup: google.maps.InfoWindow;
  private pickupSubscription: any;
  
  constructor() {
    console.log('Hello Pickup Component');
    this.text = 'Hello World';
  }

  ngOnChanges(changes) {
    console.log(changes);
    
    // do not allow pickup pin/location
    // to change if pickup is requested
    if (!this.isPickupRequested) {
      if (this.isPinSet) {
        this.showPickupMarker();
      }
      else {
        this.removePickupMarker();
      }
    }
    
    if (this.destination) {
      this.removePickupMarker();
    }
    
  }

  showPickupMarker() {
    
    this.removePickupMarker();

    this.pickupMarker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter(),
      icon: '../../assets/images/marker.png'
    })
    
    setTimeout( () => {
      this.pickupMarker.setAnimation(null);
    }, 750);

    this.showPickupTime();
    
    // send pickup location
    // this.updatedPickupLocation.next(this.pickupMarker.getPosition());
  }
  
  removePickupMarker() {
    if (this.pickupMarker) {
      this.pickupMarker.setMap(null);
      this.pickupMarker = null;
    }
  }
  
  showPickupTime() {
    this.popup = new google.maps.InfoWindow({
      content: '<h5>You Are Here</h5>'
    });
    
    this.popup.open(this.map, this.pickupMarker);
    
    google.maps.event.addListener(this.pickupMarker, 'click', () => {
      this.popup.open(this.map, this.pickupMarker);
    });
  }

}
