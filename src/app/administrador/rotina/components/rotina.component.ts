import { Component, OnInit } from '@angular/core';
import { Rotina } from 'src/app/administrador/rotina/models/rotina.model';
import { RotinaService } from 'src/app/administrador/rotina/services/rotina.service';

@Component({
  selector: 'app-rotina',
  templateUrl: './rotina.component.html',
  styleUrls: ['./rotina.component.css']
})
export class RotinaComponent implements OnInit {

  rotinas: Array<any>;
  rotina: Rotina = new Rotina();
  loading: boolean;

  constructor(private rotinaService: RotinaService) { }

  ngOnInit() {
    this.listarRotinas();
  }

  listarRotinas(){
    this.rotinaService.listar().subscribe(r => {
      this.rotinas = r;
      this.loading = false;
      
    });
  }

  buscarRotina(){
    this.rotinaService.buscarPorMatricula(this.rotina).subscribe(r => {        
      this.rotinas = r;  
      this.loading = false;        
    });   
  }

}
