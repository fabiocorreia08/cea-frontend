import { Component, OnInit } from '@angular/core';
import { RotinaService } from 'src/app/administrador/rotina/services/rotina.service';
import { StatusRotinaService } from 'src/app/services/status-rotina.service';
import { StatusRotina } from 'src/app/models/status-rotina.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private statusRotinaNovo: StatusRotina = new StatusRotina();    
  private statusRotinaModel;
  
  statusRotinas = [
    { label: 'Sim', value: true, name: 'ativado' },
    { label: 'Não', value: false, name: 'desativado'}
  ]; 
  
  constructor( 
    private rotinaService: RotinaService,
    private statusRotinaService: StatusRotinaService ) {}  

    ngOnInit() {      
      this.carregarStatusAtual();     
    }  

    iniciarRotina(){
      console.log('entrou no iniciar');
      this.rotinaService.iniciar();
    }

    carregarStatusAtual(){
      this.statusRotinaService.buscarStatusAtual().subscribe(data => {
        if(data == true){
          this.statusRotinaModel = true;
        }else{
          this.statusRotinaModel = false;
        }          
        }, 
        error => console.log(error));
    }

    gravarStatus(){
      this.statusRotinaNovo.value = this.statusRotinaModel;
      this.statusRotinaService.gravarStatus(this.statusRotinaNovo).subscribe(data => {
        console.log(data)          
        }, 
        error => console.log(error));
    }
    
}