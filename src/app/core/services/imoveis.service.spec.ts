import { TestBed } from '@angular/core/testing';
import { ImoveisService } from './imoveis.service';

describe('ImoveisService', () => {
  let service: ImoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImoveisService]
    });
    service = TestBed.inject(ImoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all imoveis', () => {
    spyOn(service, 'getAll').and.returnValue([{ id: 1, titulo: 'Casa' }]);
    expect(service.getAll().length).toBeGreaterThan(0);
  });

  it('should return imovel by id', () => {
    spyOn(service, 'getById').and.returnValue({ id: 1, titulo: 'Casa' });
    expect(service.getById(1)).toEqual({ id: 1, titulo: 'Casa' });
  });

  it('should create imovel', () => {
    const novoImovel = { titulo: 'Apartamento' };
    spyOn(service, 'create').and.returnValue({ id: 2, ...novoImovel });
    expect(service.create(novoImovel)).toEqual({ id: 2, titulo: 'Apartamento' });
  });

  it('should update imovel', () => {
    const imovelAtualizado = { id: 1, titulo: 'Casa Atualizada' };
    spyOn(service, 'update').and.returnValue(imovelAtualizado);
    expect(service.update(1, imovelAtualizado)).toEqual(imovelAtualizado);
  });

  it('should delete imovel', () => {
    spyOn(service, 'delete').and.returnValue(true);
    expect(service.delete(1)).toBeTrue();
  });
});