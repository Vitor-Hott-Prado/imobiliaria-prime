import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor() { }

  success(mensagem: string): void {
    window.alert(mensagem);
  }

  error(mensagem: string): void {
    window.alert(mensagem);
  }

  info(mensagem: string): void {
    window.alert(mensagem);
  }
}