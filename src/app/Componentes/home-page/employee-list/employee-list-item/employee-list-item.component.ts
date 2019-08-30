import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Componentes/service/employee.service';
import { EmployeeBean } from 'src/app/Componentes/dto/employeeBean';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListItemComponent implements OnInit {
  listEmployee: EmployeeBean [] = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){

    this._employeeService.listarEmpleados().subscribe(
      (data:EmployeeBean[]) =>{
        if(data){
          this.listEmployee = data;
          console.log(JSON.stringify(this.listEmployee));
        }
      },
      error =>{
        console.log('Error al obtener Tipo Insumo - Maestra');
      }
    );
   
  }

}
