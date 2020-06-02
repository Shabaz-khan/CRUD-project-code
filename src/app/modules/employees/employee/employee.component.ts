import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
 import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
     private toastrService: ToastrService
    ) { }

  ngOnInit() {
  }

  createAndUpdate(employees: Employee) {
    console.log(employees);
    if(employees.id != null){
      console.log('Update!');
      this.updateEmployee(employees);
      this.employeeService.getAllEmployees();
    }
    else {
      console.log("create!");
      this.createEmployee(employees);
    }
  }

  createEmployee(emp : Employee) {
    this.employeeService.createEmployee(emp).subscribe(
      (data: Employee) => {
            this.employeeService.getAllEmployees();
      });
   this.toastrService.success("Employee Created successfully");
  }

updateEmployee(emp: Employee) {
  this.employeeService.updateEmployee(emp).subscribe(
    (data: Employee) => {
      this.employeeService.getAllEmployees();
    });
  this.toastrService.info(" Updated successfully");
}

clearEmployee() {
  this.employeeService.currentEmployee = {
    firstName: '',
    lastName: '',
    designation: '',
    contact: null,
    id: null,
    address: ''
  }
  this.toastrService.error(" cleared successfully");
  
}

}
