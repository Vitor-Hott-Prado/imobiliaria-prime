import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardImoveisComponent } from './dashboard-imoveis.component';

describe('DashboardImoveisComponent', () => {
  let component: DashboardImoveisComponent;
  let fixture: ComponentFixture<DashboardImoveisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardImoveisComponent]
    });
    fixture = TestBed.createComponent(DashboardImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Imóveis do Corretor');
  });

  it('should render 4 imovel cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.card-imovel').length).toBe(4);
  });
});