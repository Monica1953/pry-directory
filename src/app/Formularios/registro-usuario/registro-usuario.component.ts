import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../Componentes/service/employee.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
  providers: [EmployeeService]
})
export class RegistroUsuarioComponent implements OnInit {
  valForm : FormGroup;
  constructor(
    private fb: FormBuilder
    ) { 
      this.valForm = this.fb.group({
        'user': ['', [Validators.required]]
        // 'pass': ['', [Validators.required]]
      });
    }

  ngOnInit() {
  
  }

  userValidation($ev, value: any) {
   
  }

}
