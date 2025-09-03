import { TestBed } from '@angular/core/testing';
import { NotificacaoService } from './notificacao.service';

describe('NotificacaoService', () => {
  let service: NotificacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificacaoService]
    });
    service = TestBed.inject(NotificacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success notification', () => {
    spyOn(window, 'alert');
    service.success('Sucesso!');
    expect(window.alert).toHaveBeenCalledWith('Sucesso!');
  });

  it('should show error notification', () => {
    spyOn(window, 'alert');
    service.error('Erro!');
    expect(window.alert).toHaveBeenCalledWith('Erro!');
  });

  it('should show info notification', () => {
    spyOn(window, 'alert');
    service.info('Informação!');
    expect(window.alert).toHaveBeenCalledWith('Informação!');
  });
});