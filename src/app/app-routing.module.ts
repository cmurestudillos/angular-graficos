import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {path: 'linea', component: LineaComponent},
  {path: 'barra', component: BarraComponent},
  {path: 'donut', component: DonutComponent},
  {path: 'radar', component: RadarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'linea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
