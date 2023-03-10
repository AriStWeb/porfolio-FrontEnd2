import { Component, OnInit } from '@angular/core';
import { DatosPortfolioService } from 'src/app/servicios/datos-portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  miPortfolio:any;
  constructor(private datosPorfolio:DatosPortfolioService){

  }
  ngOnInit():void{
    this.datosPorfolio.obtencionDatos().subscribe(datos=>{
      console.log(datos);
      this.miPortfolio=datos;
    });

  }
}
