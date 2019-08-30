import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './Principal/principal.component';
import { HomePageComponent } from './Componentes/home-page/home-page.component';
import { RegistroUsuarioComponent } from './Formularios/registro-usuario/registro-usuario.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'form', component: RegistroUsuarioComponent }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }
