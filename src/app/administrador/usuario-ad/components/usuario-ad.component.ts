import { Component, OnInit } from '@angular/core';
import { UsuarioADService } from '../services/usuario-ad.service';
import { UsuarioAD } from 'src/app/administrador/usuario-ad/models/usuario-ad.model'

@Component({
  selector: 'app-usuario-ad',
  templateUrl: './usuario-ad.component.html',
  styleUrls: ['./usuario-ad.component.css']
})
export class UsuarioADComponent implements OnInit {  

  usuarioADs: Array<any>;
  usuarioAD: UsuarioAD = new UsuarioAD();  
  loading: boolean;
  
  constructor(private usuarioADService: UsuarioADService) { }

  ngOnInit() {
    this.listarUsuarios();    
  } 

  private listarUsuarios(){
    this.usuarioADService.listar().subscribe(u => {
      this.usuarioADs = u;      
      this.loading = false;    
    });
  }

  buscarUsuario(){
      this.usuarioADService.buscarPorMatricula(this.usuarioAD).subscribe(u => {        
        this.usuarioADs = u;  
        this.loading = false;        
    });   
  }

}
