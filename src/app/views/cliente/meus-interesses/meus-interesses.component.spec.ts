import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusInteressesComponent } from './meus-interesses.component';

describe('MeusInteressesComponent', () => {
  let component: MeusInteressesComponent;
  let fixture: ComponentFixture<MeusInteressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusInteressesComponent]
    });
    fixture = TestBed.createComponent(MeusInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Meus Interesses');
  });

  it('should render 4 imovel cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.card-imovel').length).toBe(4);
  });
});