import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/clientes';
  }  

  salvar(cliente: Cliente): Observable<Cliente> {
    console.log('entrou auiiii '+cliente);
    return this.http.post<Cliente>(`${this.baseUrl}/salvar`, cliente);
  }

  gravarStatus(statusRotina: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, statusRotina);
  }
}
