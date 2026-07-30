import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

const BASE_URL="http://localhost:8080/api/employees"
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(BASE_URL);
  }

  addEmployee(employee:Employee):Observable<any>{
    return this.http.post<any>(BASE_URL,employee)
  }
  
  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(`${BASE_URL}/${id}`,employee)
  }
  employeeInfo(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${BASE_URL}/${id}`);
  }

  deleteEmployee(id:number):Observable<void>{
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }

}
