import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  public Characterlist: any;

 

  constructor( ) { 
    console.log("Me he construido");
  }

  ngOnInit(): void { 
    console.log("Me he iniciado");
  }

  ngOnChanges(): void {
      console.log("He cambiado")
  }

  ngOnDestroy(): void {
      console.log("Me he destruido")
  }



}
