import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = [
    { id: 1, nombre: 'Miguel' },
    { id: 2, nombre: 'Leonardo' },
    { id: 3, nombre: 'Gisella' },
    { id: 4, nombre: 'Juancho' },
    { id: 5, nombre: 'Joe' },
    { id: 6, nombre: 'Carlos' },
    { id: 7, nombre: 'Lucas' }

  ]

  changedList($event) {
    console.log($event);
  }

  shareIndividualCheckedList($event) {
    console.log($event);
  }

}
