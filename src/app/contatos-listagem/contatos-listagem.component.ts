import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent {

  contatos = [
    {id: 1, nome: 'Alexandre', email: 'Alexandre@gmail.com'},
    {id: 2, nome: 'Alison', email: 'Alisonvitor@gmail.com'}
  ]

}
