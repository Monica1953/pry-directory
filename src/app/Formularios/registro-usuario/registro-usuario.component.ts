import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../../Componentes/service/employee.service';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
  providers: [EmployeeService]
})
export class RegistroUsuarioComponent implements OnInit {
  valForm : FormGroup;
  valFormAccount : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.valForm = this.formBuilder.group({
          fullName: ['', Validators.required],
          cumple: ['', Validators.required],
          phone: ['', Validators.required, CustomValidators.number]
          // ,
            // lastName: ['', Validators.required],
            // email: ['', [Validators.required, Validators.email]],
            // password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

  get f() { return this.valForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.valForm.invalid) {
        return;
    }else{
      this.submitted = false;
    }

    alert('SUCCESS!! :-)')
}

  

}
