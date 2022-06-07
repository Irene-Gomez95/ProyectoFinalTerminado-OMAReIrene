import { Characterdetails } from './../../shared/interfaces/character.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card-character',
  templateUrl: './list-card-character.component.html',
  styleUrls: ['./list-card-character.component.scss']
})
export class ListCardCharacterComponent implements OnInit {

  /* Con input recibimos los datos del componente padre */
  /* Definimos la interfaz para que nos ercoja las propiedades que tenemos de nuestro character */
  @Input() value: Characterdetails;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
