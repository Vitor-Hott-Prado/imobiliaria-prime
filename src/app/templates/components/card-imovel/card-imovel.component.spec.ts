import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardImovelComponent } from './card-imovel.component';

describe('CardImovelComponent', () => {
  let component: CardImovelComponent;
  let fixture: ComponentFixture<CardImovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardImovelComponent]
    });
    fixture = TestBed.createComponent(CardImovelComponent);
    component = fixture.componentInstance;
    // Simula um imóvel para o teste
    component.imovel = { id: 1, titulo: 'Casa Moderna' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render imovel title and id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Casa Moderna');
    expect(compiled.querySelector('p')?.textContent).toContain('1');
  });
});