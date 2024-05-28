import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reseteo</button>
    <button (click)="increaseBy(-1)">-1</button>



  `
})

export class CounterComponent{
  constructor() { }

  public title:string = 'Hola mundo';
  public counter:number = 10;

  increaseBy( exponente:number ):void{
    this.counter += exponente;
  }

  reset():void{
    this.counter = 10;
  }

}
