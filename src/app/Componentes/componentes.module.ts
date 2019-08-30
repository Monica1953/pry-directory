import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../Componentes/home-page/home-page.component';
import { EmployeePageComponent } from '../Componentes/employee-page/employee-page.component';
import { EmployeHeaderComponent } from '../Componentes/employee-page/employe-header/employe-header.component';
import { HomeHeaderComponent } from '../Componentes/home-page/home-header/home-header.component';
import { SearchBarComponent } from '../Componentes/home-page/search-bar/search-bar.component';
import { EmployeeListComponent } from '../Componentes/home-page/employee-list/employee-list.component';
import { EmployeeListItemComponent } from '../Componentes/home-page/employee-list/employee-list-item/employee-list-item.component';
import { AppRoutesIcModule } from '../Componentes/app-routes-ic.module';
import { ComponentesComponent } from './componentes';

@NgModule({
  imports: [
    CommonModule,
    AppRoutesIcModule
  ],
  declarations: [
    ComponentesComponent,
    HomePageComponent, EmployeePageComponent, EmployeHeaderComponent, HomeHeaderComponent, SearchBarComponent, EmployeeListComponent, EmployeeListItemComponent],
  bootstrap: [ComponentesComponent]
})
export class ComponentesModule { }
