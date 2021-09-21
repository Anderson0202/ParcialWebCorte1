import { Component, OnInit } from '@angular/core';
import { ContratoService } from "../../services/contrato.service";
import { Contrato } from "../../solucionParcial/models/contrato";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  contrato: Contrato;
  constructor(private contratoService: ContratoService) {
    this.contrato = new Contrato();
  }

  ngOnInit(): void {
  }

  add(){

      this.contratoService.post(this.contrato);
      alert('Se agegro un nuevo contrato' + JSON.stringify(this.contrato));
    
  }

  validar(): Boolean{
    let error: boolean = false;

    if (!this.validarNumero(this.contrato.idContrato)){
      alert('ingrese una ID valida');
      error = true;
    }

    if (this.contrato.valorContrato == 0){
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
