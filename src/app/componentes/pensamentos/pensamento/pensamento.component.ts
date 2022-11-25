import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I Love Angular',
    autoria: 'Gui',
    modelo: 'modelo3',
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): String{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
