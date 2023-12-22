import { 
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           OnDestroy
{

  quantidade: number = 0; 

  constructor() { }
  
  add(){
    this.quantidade += 1;
  }

  remove(){
    this.quantidade -= 1;
  }

  
  // checked -> content(TS) -> view(HTML)

  ngDoCheck(): void {
    //evento disparado sempre que propriedades do component são verificadas
    console.log("Do check!")
  }

  ngAfterViewInit(): void {
    //depois da inicialização da view
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    //Após alguma alteração, verifica a view
    console.log("ngAfterViewChecked")
    
  }

  ngAfterContentChecked(): void{
    // Após alguma alteração, verifica o conteúdo
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    //Quando o primeiro conteúdo é iniciado
    console.log("ngAfterContentInit")
  }

  ngOnChanges(): void {
    //evento disparado sempre que há alterações atráves do @Input
    console.log("On Change!")
  }

  ngOnInit(): void {
    //evento disparado quando um componente for iniciado.
    console.log("On Init!");
  } 

  ngOnDestroy(): void {
    console.log("hasta la vista baby")
  }

}
