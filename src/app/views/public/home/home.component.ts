import { Component } from '@angular/core';

interface Imovel {
  id: number;
  titulo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imoveis: Imovel[] = [
    { id: 1, titulo: 'Casa Moderna' },
    { id: 2, titulo: 'Apartamento Central' },
    { id: 3, titulo: 'Chácara Espaçosa' },
    { id: 4, titulo: 'Studio Compacto' }
  ];
}