import { Component } from '@angular/core';

/*
  Generated class for the History component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  text: string;

  constructor() {
    console.log('Hello History Component');
    this.text = 'Hello World';
  }

}
