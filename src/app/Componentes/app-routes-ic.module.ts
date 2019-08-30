import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentesComponent } from './componentes';
import { EmployeePageComponent } from './employee-page/employee-page.component';

const routes: Routes = [
  // { path: 'form', component: Formular },
  { path: 'component', component: ComponentesComponent },
  { path: 'employeeDetails/:codEmployee', component: EmployeePageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesIcModule { }
