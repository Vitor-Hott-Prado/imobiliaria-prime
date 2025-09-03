import { Injectable } from '@angular/core';

export interface Imovel {
  id: number;
  titulo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImoveisService {
  private imoveis: Imovel[] = [
    { id: 1, titulo: 'Casa' }
  ];

  constructor() { }

  getAll(): Imovel[] {
    return [...this.imoveis];
  }

  getById(id: number): Imovel | undefined {
    return this.imoveis.find(imovel => imovel.id === id);
  }

  create(imovel: Partial<Imovel>): Imovel {
    const novoImovel: Imovel = {
      id: this.imoveis.length + 1,
      titulo: imovel.titulo || ''
    };
    this.imoveis.push(novoImovel);
    return novoImovel;
  }

  update(id: number, imovel: Partial<Imovel>): Imovel | undefined {
    const index = this.imoveis.findIndex(i => i.id === id);
    if (index > -1) {
      this.imoveis[index] = { ...this.imoveis[index], ...imovel };
      return this.imoveis[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.imoveis.findIndex(i => i.id === id);
    if (index > -1) {
      this.imoveis.splice(index, 1);
      return true;
    }
    return false;
  }
}