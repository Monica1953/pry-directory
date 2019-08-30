import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroUsuarioComponent } from '../Formularios/registro-usuario/registro-usuario.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  declarations: [RegistroUsuarioComponent]
})
export class FormulariosModule { }
