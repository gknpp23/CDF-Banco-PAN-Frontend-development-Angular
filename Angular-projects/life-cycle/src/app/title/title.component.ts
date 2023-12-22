import { Component, OnInit, OnChanges, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  //Esse trecho executa antes da iniciação do componente
  @Input() nome:string = '';
  
  //Os Lifecycle hooks são interfaces, por isso devem ser implementados na classe.

  constructor() { 
    console.log("Construtor");
  }

  ngOnInit(): void {
  //evento disparado quando um componente for iniciado.
  console.log("On Init!");
  }

  ngOnChanges(): void {
    //evento disparado sempre que há alterações atráves do @Input
    console.log("On Change!")
  }
  

}
