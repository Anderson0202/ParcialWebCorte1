import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RegistroComponent } from './components/registro/registro.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'Registro',
    component:RegistroComponent
  },
  {
    path: 'Consulta',
    component: ConsultaComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
