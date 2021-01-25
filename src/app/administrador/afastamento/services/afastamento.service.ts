import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AfastamentoService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/afastamentos';
  }

  listar(){
    return this.http.get<Array<any>>(`${this.baseUrl}`);
  }

  criar(afastamento: any){
    return this.http.post(`${this.baseUrl}`, afastamento);
  }

  /* buscarPorMatricula(afastamento: any){    
    return this.http.get<Array<Afastamento>>(`${this.baseUrl}`+'/buscarPorMatricula/'+afastamento.matricula);
  } */

}
