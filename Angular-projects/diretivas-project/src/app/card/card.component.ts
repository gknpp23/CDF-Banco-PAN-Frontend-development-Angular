import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  menuType: string = 'asas';
  produtos: string[] = [];

  constructor() { 
    this.produtos = [
      "Mouse",
      "Teclado",
      "Fonte"
    ]
  }

  ngOnInit(): void {
  }

}
