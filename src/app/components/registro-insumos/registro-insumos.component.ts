import { Component, OnInit } from '@angular/core';
import { InsumoService } from "../../services/insumo.service";
import { Insumo } from "../../solucionParcial/models/insumo";


@Component({
  selector: 'app-registro-insumos',
  templateUrl: './registro-insumos.component.html',
  styleUrls: ['./registro-insumos.component.css']
})
export class RegistroInsumosComponent implements OnInit {
  insumo: Insumo
  constructor(private insumoService: InsumoService) {
    this.insumo = new Insumo();
  }

  ngOnInit(): void {
  }

  add(){

    this.insumoService.post(this.insumo);
    alert('Se agegro un nuevo insumo' + JSON.stringify(this.insumo));

  }

  validar(): Boolean{
    let error: boolean = false;

    if (!this.validarNumero(this.insumo.idContrato)){
      alert('ingrese una ID valida');
      error = true;
    }

    if (this.insumo.valorProducto == 0){
      alert('ingrese una valor valido');
      error = true;
    }

    return error
  }

  validarNumero(numero: string)
  {
    var valoresAceptados = /^[0-9]+$/;
    return numero.match(valoresAceptados);
  }

}
