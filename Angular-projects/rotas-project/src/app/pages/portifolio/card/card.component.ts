import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private browser: Router) { // injeções de dependência 
    
    this.activeRoute.firstChild?.params.subscribe( // acessa os parametros de da rota que é o primeiro filho da rota ativa caso ela exista
      res => console.log(res)
    )
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.browser.navigate(['/'])
    // },5000)
  }

}
