import { CharacterService } from './../services/services/character.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public title = 'Rick & Morty App';
  public characters : any[] = [];
  public info : any = null;
  public q : string = "";
  public pages : any[] = [];
  public currentPage : number = 1;


  constructor(private CharacterService : CharacterService) {}

  /* Mandamos a llamar a la siguiente función que se encuentra dentro de la función */
  ngOnInit() {
    this.getCharacters();
  } 

  /* Esta función hace que recibamos un número de páginas y nombre del personaje,
  eso hace que podamos traer nuestra lista de la API */
  getCharacters(page : number = 1, name : string = "") {
    this.CharacterService.characters(page, name).subscribe(response => {
      this.characters = response.results
      this.info = response.info;
      this.pages = Array(this.info.pages).map((x,i)=>i);
    })
  }

  /* Se encarga de actualizar la petición a getcharacter de esta forma podemos
  podemos realizar varias peticiones a la API */
  search(event: any, n: any) {
    this.currentPage = n + 1;
    this.getCharacters(this.currentPage, this.q);
  }
}
