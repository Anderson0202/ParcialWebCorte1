import { Injectable } from '@angular/core';
import { Contrato } from "../solucionParcial/models/contrato";

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor() { }

  get(): Contrato[] {
    return JSON.parse(<string>localStorage.getItem('datos'));
  }

  post(contrato: Contrato) {
    let contratos: Contrato[] = [];
    if (this.get() != null) {
      contratos = this.get();
    }
    contratos.push(contrato);
    localStorage.setItem('datos', JSON.stringify(contratos));
  }
}
