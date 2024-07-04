import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';

interface Contato{
  id : number;
  nome : string;
  telefone : string;
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string ='abcdefghijklmnopqrstuvxwyz'
  contato:Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra:string) :Contato[]{
    return this.contato.filter ( contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    })
    
  }
}
