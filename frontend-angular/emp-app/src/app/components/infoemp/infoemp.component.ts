import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-infoemployee',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './infoemp.component.html',
  styleUrl: './infoemp.component.css'
})
export class InfoempComponent implements OnInit {

  employee!: Employee;

  employeeId: string = '';

  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.employeeId =
      this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.getEmployeeById();
  }

  getEmployeeById(): void {

    this.employeeService
      .employeeInfo(parseInt(this.employeeId))
      .subscribe({

        next: (data: Employee) => {
          this.employee = data;
        },

        error: (error: any) => {
          console.error(
            'Error while fetching employee information:',
            error
          );
        }

      });
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}