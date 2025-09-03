import { Component } from '@angular/core';

interface Imovel {
  id: number;
  titulo: string;
}

@Component({
  selector: 'app-dashboard-imoveis',
  templateUrl: './dashboard-imoveis.component.html',
  styleUrls: ['./dashboard-imoveis.component.scss']
})
export class DashboardImoveisComponent {
  imoveis: Imovel[] = [
    { id: 1, titulo: 'Casa Moderna' },
    { id: 2, titulo: 'Apartamento Central' },
    { id: 3, titulo: 'Chácara Espaçosa' },
    { id: 4, titulo: 'Studio Compacto' }
  ];
}