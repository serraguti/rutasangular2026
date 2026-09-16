import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-numerosroutedinamicos',
  standalone: false,
  styleUrl: './numerosroutedinamicos.css',
  templateUrl: './numerosroutedinamicos.html',
})
export class Numerosroutedinamicos implements OnInit {
  public numerosRandom: Array<number>;
  //NUMERO QUE VIENE EN NUESTRO PATH
  public numero!: number;
  public doble!: number;
  constructor (private _activeRoute: ActivatedRoute){
    this.numerosRandom = [2, 4, 6, 7];
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['numero'] != null){
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
      }
    })
  }
  generarNumeroRandom(): void{
    let random = Math.floor(Math.random() * 100) + 1;
    this.numerosRandom.push(random);
  }
}
