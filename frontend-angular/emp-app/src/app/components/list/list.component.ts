import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  empList: Employee[] = [];

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // Get all employees
  getEmployees(): void {

    this.employeeService.getEmployees().subscribe({

      next: (data: Employee[]) => {
        this.empList = data;
        this.errorMessage = '';
      },

      error: (error) => {
        console.error('Error fetching employees:', error);

        this.errorMessage =
          'Unable to fetch employee details.';
      }

    });
  }

  // Delete employee using employee ID
  deleteEmployee(id: number): void {

    const confirmation = confirm(
      'Do you want to delete this employee?'
    );

    if (!confirmation) {
      return;
    }

    this.employeeService.deleteEmployee(id).subscribe({

      next: () => {

        this.successMessage =
          'Employee deleted successfully.';

        this.errorMessage = '';

        // Fetch updated employee list
        this.getEmployees();

      },

      error: (error) => {

        console.error('Error deleting employee:', error);

        this.errorMessage =
          'Unable to delete employee.';

        this.successMessage = '';

      }

    });
  }
}