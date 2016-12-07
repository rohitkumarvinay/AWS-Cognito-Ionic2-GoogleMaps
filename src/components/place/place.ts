import { Component } from '@angular/core';

/*
  Generated class for the Place component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'place',
  templateUrl: 'place.html'
})
export class PlaceComponent {

  text: string;

  constructor() {
    console.log('Hello Place Component');
    this.text = 'Hello World';
  }

}
