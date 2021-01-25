import { Component, OnInit } from '@angular/core';
import { Afastamento } from '../models/afastamento.model';
import { AfastamentoService } from '../services/afastamento.service';

@Component({
  selector: 'app-afastamento',
  templateUrl: './afastamento.component.html',
  styleUrls: ['./afastamento.component.css']
})
export class AfastamentoComponent implements OnInit {

  afastamentos: Array<any>;
  afastamento: Afastamento = new Afastamento();
  loading: boolean;

  constructor(private afastamentoService: AfastamentoService) { }

  ngOnInit() {
    this.listarAfastamentos();
  }

  listarAfastamentos(){
    this.afastamentoService.listar().subscribe(a => {
      this.afastamentos = a;
      this.loading = false;      
    });
  }

  /* buscarAfastamento(){
    this.afastamentoService.buscarPorMatricula(this.afastamento).subscribe(a => {        
      this.afastamentos = a;
      this.loading = false;        
    });   
  } */

}
