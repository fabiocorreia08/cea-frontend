import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusRotina } from 'src/app/models/status-rotina.model'

@Injectable({
  providedIn: 'root'
})
export class StatusRotinaService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/status';
  } 

  gravarStatus(statusRotina: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/salvar`, statusRotina);
  }

  buscarStatusAtual(){
    return this.http.get<boolean>(`${this.baseUrl}/buscarStatusAtual`);
  }
  
  getStatusRotinaOpt(){
    return [
      { label: 'Sim', value: true, name: 'sim' },
      { label: 'Não', value: false, name: 'não'}
    ];
  }

}
