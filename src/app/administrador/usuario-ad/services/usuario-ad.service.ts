import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioAD } from 'src/app/administrador/usuario-ad/models/usuario-ad.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioADService {

  //private baseUrl = 'http://localhost:8080/usuario-ad';
  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/usuarios-ad';
  }  

  listar(){
    return this.http.get<Array<any>>(`${this.baseUrl}`);
  }

  criar(usuarioAD: any){
    return this.http.post(`${this.baseUrl}`, usuarioAD);
  }  

  buscarPorMatricula(usuarioAD: any){    
    return this.http.get<Array<UsuarioAD>>(`${this.baseUrl}`+'/buscarPorMatricula/'+usuarioAD.physicalDeliveryOfficeName);
  }

  /*
    public buscarPaginadaAbertaReaberta(matricula: string, params?: any): Observable<Pagina<ManutencaoCorretivaConsulta>> {
      return super.filter(this.baseEndPoint + '/pagina/aberta-reaberta', matricula, params);
    } 
  */

}
