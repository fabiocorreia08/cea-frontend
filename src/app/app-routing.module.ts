import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/componets/home.component';
import { LoginComponent } from './login/components/login.component';
import { UsuarioADComponent } from './administrador/usuario-ad/components/usuario-ad.component';
import { AfastamentoComponent } from './administrador/afastamento/components/afastamento.component';
import { RotinaComponent } from './administrador/rotina/components/rotina.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'home', component: HomeComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'usuario-ad', component: UsuarioADComponent},
  {path: 'afastamento', component: AfastamentoComponent},
  {path: 'rotina', component: RotinaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
