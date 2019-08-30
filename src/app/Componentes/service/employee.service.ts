import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { webServiceEndpoint } from "../commons";
import { EmployeeBean } from '../dto/employeeBean';

@Injectable()
export class EmployeeService{
    url = webServiceEndpoint;
    constructor(
        // private http: HttpClient,
        private _router: Router) { }

    listarEmpleados(): Observable<EmployeeBean[]>{
        // return this.http.post<EmployeeBean[]>(`${this.url}api/listEmployee`, {});
        const employeeObservable = new Observable<EmployeeBean[]>(observer => {
                setTimeout(() => {
                    observer.next(this.employees);
                }, 10);
        });
     return employeeObservable;
    }

    obtenerEmpleado(codEmployee:any){
        let listEspAux = this.employees.filter((employee) => employee.codEmployee === codEmployee); 
        let item = listEspAux[0];
        return item;
    }

    employees: EmployeeBean[] = [{
        codEmployee:1,
        name: 'James', 
        firstName: 'King',
        lastName: '781-000-0002',
        position: 'President and CEO',
        telephone: '781-000-0002',
        phone: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    },{
        codEmployee:2,
        name: 'Julie', 
        firstName: 'Taylor',
        lastName: '781-000-0002',
        position: 'VP of Marketing',
        telephone: '781-000-0002',
        phone: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    },{
        codEmployee:3,
        name: 'Eugene', 
        firstName: 'Lee',
        lastName: '781-000-0002',
        position: 'CFO',
        telephone: '781-000-0002',
        phone: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    },{
        codEmployee:4,
        name: 'John', 
        firstName: 'Williams',
        lastName: '781-000-0002',
        position: 'VP of Engineering',
        telephone: '781-000-0002',
        phone: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    },{
        codEmployee:5,
        name: 'Ray', 
        firstName: 'Moore',
        lastName: '781-000-0002',
        position: 'VP of Sales',
        telephone: '781-000-0002',
        phone: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    },{
        codEmployee:6,
        name: 'Raul', 
        firstName: 'Jones',
        lastName: '781-000-0002',
        position: 'QA Manager',
        telephone: '781-000-0002',
        phone: '617-000-0002',
        email: 'jtaylor@fakemail.com'
    }];    

}