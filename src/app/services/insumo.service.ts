import { Injectable } from '@angular/core';
import { Insumo } from "../solucionParcial/models/insumo";

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  constructor() { }

  get(): Insumo[] {
    return JSON.parse(<string>localStorage.getItem('datos'));
  }

  post(insumo: Insumo) {
    let insumos: Insumo[] = [];
    if (this.get() != null) {
      insumos = this.get();
    }
    insumos.push(insumo);
    localStorage.setItem('datos', JSON.stringify(insumos));
  }

}
