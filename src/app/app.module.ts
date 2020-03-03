import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Graficos
import { ChartsModule } from 'ng2-charts';
//Rutas
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    NavbarComponent,
    FooterComponent,
    BarraComponent,
    DonutComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
