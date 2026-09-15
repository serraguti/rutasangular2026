import { Component, OnInit } from '@angular/core';
//PARA PODER RECUPERAR PARAMETROS NECESITAMOS ActivatedRoute
//Y TAMBIEN Params
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-numero.doble.component',
  standalone: false,
  styleUrl: './numero.doble.component.css',
  templateUrl: './numero.doble.component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;
  //RECIBIMOS LOS OBJETOS EN EL CONSTRUCTOR
  constructor(private _activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    //NOS SUBSCRIBIMOS A LA RECEPCION DE PARAMETROS
    this._activeRoute.params.subscribe((parametros: Params) =>{
      //DENTRO DE PARAMS ES DONDE RECIBIMOS LOS PARAMETROS POR SU :name
      //LA SINTAXIS PARA RECUPERARLOS ES: params['PARAMETER NAME']
      //NUESTRO PARAMETRO ES OPCIONAL
      if (parametros['numero'] != null){
        //LOS PARAMETROS SIEMPRE SON DE TIPO String
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }
}
