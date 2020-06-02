import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/model/employee.model';
import { NgxSpinnerService } from 'ngx-spinner';

const headerOption = {
  headers: new HttpHeaders({ 'Content:Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  mockUrl = "http://localhost:3000/Employee";
  allEmployee: Employee[];

  currentEmployee: Employee = {
    firstName: '',
    lastName: '',
    designation: '',
    contact: null,
    id: null,
    address: ''
  }

  constructor(
    private http: HttpClient,
    private ngxSpinnerService: NgxSpinnerService
    ) { }

  getAllEmployees() {
    this.ngxSpinnerService.show();
    setTimeout( () => {
      this.ngxSpinnerService.hide();
    }, 500 ); 
    return this.http.get(this.mockUrl).subscribe(
      (data:Employee[]) => {
        this.allEmployee = data;
        console.log(this.allEmployee);
      });
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.mockUrl + '/' + id);
  }

  createEmployee(emp: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.mockUrl, emp)
  }

  updateEmployee(emp : Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.mockUrl + '/' + emp.id , emp)
  }
}
