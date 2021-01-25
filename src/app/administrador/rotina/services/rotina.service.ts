import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rotina } from 'src/app/administrador/rotina/models/rotina.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/rotinas';
  }

  listar(){
    return this.http.get<Array<any>>(`${this.baseUrl}`);
  }

  iniciar(){        
    return this.http.get(`${this.baseUrl}`+'/iniciar');
  } 
 
  buscarPorMatricula(rotina: any){    
    return this.http.get<Array<Rotina>>(`${this.baseUrl}`+'/buscarPorMatricula/'+rotina.matricula);
  }  

}
