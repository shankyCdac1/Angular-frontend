import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees : Employee[];

  constructor(private empService : EmpService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  private getAllEmployees(){
    this.empService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
