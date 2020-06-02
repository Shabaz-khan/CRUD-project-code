import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.getAllEmployee()
  }

  getAllEmployee() {
    this.employeeService.getAllEmployees();
  }

  deleteEmployee(id: number) {
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(
      (data: Employee) => {
          this.getAllEmployee();
      });
   this.toastrService.info("Employee deleted successfully");

  }

  edit(emp) {
   this.employeeService.currentEmployee = Object.assign({} , emp); 
  }
      
      
}
