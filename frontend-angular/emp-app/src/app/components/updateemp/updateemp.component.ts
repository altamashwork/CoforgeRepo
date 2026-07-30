import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';



@Component({
  selector: 'app-updateemp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './updateemp.component.html',
  styleUrl: './updateemp.component.css'
})
export class UpdateempComponent implements OnInit {

  updateForm!: FormGroup;

  employeeId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.updateForm = this.formBuilder.group({

      id: [{ value: '', disabled: true }],

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      desg: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ]

    });

    this.employeeId =
      this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.getEmployeeById();
  }

  getEmployeeById(): void {

    this.employeeService
      .employeeInfo(parseInt(this.employeeId))
      .subscribe({

        next: (employee: Employee) => {

          this.updateForm.patchValue({
            id: employee.id,
            name: employee.name,
            desg: employee.desg
          });

        },

        error: (error) => {
          console.error(
            'Error while fetching employee:',
            error
          );
        }

      });
  }

  updateEmployee(): void {

    if (this.updateForm.invalid) {
      this.updateForm.markAllAsTouched();
      return;
    }

    const updatedEmployee: Employee = {
      id: parseInt(this.employeeId),
      name: this.updateForm.value.name,
      desg: this.updateForm.value.desg
    };

    this.employeeService
      .updateEmployee(
        parseInt(this.employeeId),
        updatedEmployee
      )
      .subscribe({

        next: (data: Employee) => {

          console.log(
            'Employee updated successfully:',
            data
          );

          alert('Employee updated successfully');

          this.router.navigate(['/list']);

        },

        error: (error) => {

          console.error(
            'Error while updating employee:',
            error
          );

        }

      });
  }

  cancel(): void {
    this.router.navigate(['/list']);
  }

  get name() {
    return this.updateForm.get('name');
  }

  get desg() {
    return this.updateForm.get('desg');
  }
}