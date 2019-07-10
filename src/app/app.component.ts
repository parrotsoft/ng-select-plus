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
    { id: 7, nombre: 'Lucas' },
    { id: 8, nombre: 'Mateo' },
    { id: 9, nombre: 'Iliam' },
    { id: 10, nombre: 'Merlis' },
    { id: 11, nombre: 'Juan Jose' },
    { id: 12, nombre: 'Alejandro' },
    { id: 13, nombre: 'Camila' },
    { id: 14, nombre: 'David' },
    { id: 15, nombre: 'Alejandra' },
    { id: 16, nombre: 'Emilse' },
    { id: 17, nombre: 'Gricelda' },
    { id: 18, nombre: 'Susana' },
    { id: 19, nombre: 'Elva' },
    { id: 20, nombre: 'Rafaela' },
    { id: 21, nombre: 'Michel' },
    { id: 22, nombre: 'Pedro' },
    { id: 23, nombre: 'Arnaldo' },
    { id: 24, nombre: 'Jonathan' },
    { id: 25, nombre: 'Francisco' },
  ];

  /**
   *
   * @param $event Retorna un array con los objecto seleccionado...
   */
  changedList($event) {
    console.log($event);
  }

  /**
   *
   * @param $event Retorna el item que se proceso ya sea activando o no
   */
  shareIndividualCheckedList($event) {
    console.log($event);
  }

}
