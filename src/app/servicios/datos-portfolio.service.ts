import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPortfolioService {

  constructor(private http:HttpClient) { }

  obtencionDatos():Observable<any>{
    return  this.http.get('./assets/datos/datos.json');
  }
}
