import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './components/registro/registro.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RegistroInsumosComponent } from './components/registro-insumos/registro-insumos.component';
import { ContratoService } from "./services/contrato.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    ConsultaComponent,
    RegistroInsumosComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ContratoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
