import { Component, OnInit } from '@angular/core';
import { EmployeeBean } from '../../dto/employeeBean';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    
  }


  

}
