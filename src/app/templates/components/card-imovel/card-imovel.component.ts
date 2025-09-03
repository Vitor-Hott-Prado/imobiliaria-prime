import { Component, Input } from '@angular/core';

export interface Imovel {
  id: number;
  titulo: string;
}

@Component({
  selector: 'app-card-imovel',
  templateUrl: './card-imovel.component.html',
  styleUrls: ['./card-imovel.component.scss']
})
export class CardImovelComponent {
  @Input() imovel!: Imovel;
}