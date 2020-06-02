import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './modules/shared/employee.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EmployeesModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot() ,
    NgxSpinnerModule
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  ToastrModule
 }
