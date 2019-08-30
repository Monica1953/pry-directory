import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormulariosModule } from './Formularios/formularios.module';
import { ComponentesModule } from './Componentes/componentes.module';
import { PrincipalComponent } from './Principal/principal.component';
import { AppRoutesModule } from './app-routes.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    FormulariosModule,
    ComponentesModule,
    AppRoutesModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
