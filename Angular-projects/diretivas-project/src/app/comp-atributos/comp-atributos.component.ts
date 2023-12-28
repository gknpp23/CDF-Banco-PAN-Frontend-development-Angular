import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  corFundo: string = "#00aaff";
  corTitulo: string = "#404040"
  estilo: string = "enable";
  item:string = '';
  lista:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  desabilitar(){
    if(this.estilo != "disable") {
      this.estilo = "disable";
    }
  }

  adicionarItem(){
    this.lista.push(this.item);
  }

}
