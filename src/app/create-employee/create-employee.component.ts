import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

constructor(private empService : EmpService,private router : Router) { }

  ngOnInit(): void {
  }

  gotToEmpList(){
    this.router.navigate(['/employee']);
  }

  // IF not using ngModel to save value
  /*onCheck(event : Event){
    alert(this.employee.firstName = (<HTMLInputElement>event.target).value);
  }*/

  //If using local reference to save value
  /*onbtnClick(fName : HTMLInputElement){
    this.employee.firstName = fName.value;
  }*/

  onSubmit(){
    this.empService.addEmployees(this.employee).subscribe(
      data => console.log(data)
    );
    this.gotToEmpList();
  }

}
