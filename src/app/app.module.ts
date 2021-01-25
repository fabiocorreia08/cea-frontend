import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/componets/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent } from './login/components/login.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpInterceptorService } from './login/services/httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { UsuarioADComponent } from './administrador/usuario-ad/components/usuario-ad.component';
import { AfastamentoComponent } from './administrador/afastamento/components/afastamento.component';
import { RotinaComponent } from './administrador/rotina/components/rotina.component';
import { TableModule} from 'primeng/table';
import { MessagesComponent } from './core/messages/messages.component';
import { HomeLayoutComponent } from './core/layouts/home-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,       
    LoginComponent,    
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    UsuarioADComponent,
    AfastamentoComponent,
    RotinaComponent,
    MessagesComponent,
    HomeLayoutComponent,
    LoginLayoutComponent   
  ],
  imports: [
    AutocompleteLibModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
