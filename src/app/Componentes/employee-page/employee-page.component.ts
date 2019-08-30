import { Component, OnInit, Input } from '@angular/core';
import { EmployeeBean } from '../dto/employeeBean';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css'],
  providers: [EmployeeService]
})
export class EmployeePageComponent implements OnInit {
  @Input() employee: EmployeeBean;
  constructor(private route: ActivatedRoute,
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    let id= +this.route.snapshot.paramMap.get('codEmployee');
    console.log('------------------------------------');
    console.log(id)
    console.log('------------------------------------');  

    this.employee = this._employeeService.obtenerEmpleado(id)
    console.log('-----------------EMPLEADO-------------------');
    console.log(this.employee)
    console.log('------------------------------------');  
  
  }

}
