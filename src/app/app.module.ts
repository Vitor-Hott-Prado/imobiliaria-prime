import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/public/home/home.component';
import { BuscaImoveisComponent } from './views/public/components/busca-imoveis/busca-imoveis.component';
import { MeusInteressesComponent } from './views/cliente/meus-interesses/meus-interesses.component';
import { DashboardImoveisComponent } from './views/corretor/dashboard-imoveis/dashboard-imoveis.component';
import { NavbarComponent } from './templates/components/navbar/navbar.component';
import { CardImovelComponent } from './templates/components/card-imovel/card-imovel.component';
import { FooterComponent } from './templates/components/footer/footer.component';
import { PrimeiraLetraMaiusculaPipe } from './pipes/primeira-letra-maiuscula.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaImoveisComponent,
    MeusInteressesComponent,
    DashboardImoveisComponent,
    NavbarComponent,
    CardImovelComponent,
    FooterComponent,
    PrimeiraLetraMaiusculaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
