import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  /*Es URL fija que de nuestra API(lo que nunca se modifica)*/
  private BASE_URL = "https://rickandmortyapi.com/api/";

  /* En el contrsuctor se indicó un objeto para poder realizar las peticiones posteriores */
  constructor(private http : HttpClient) { }
  
  /* Es URL variable para hacer la llamada */
  characters (page : number = 1, name : string = "") {
    return this.http.get<any>(this.BASE_URL + `character?page=${page}&name=${name}` , {})
  }
}