import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable()
export class EmpService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  addEmployees(employee : Employee) : Observable<Object>{
    alert(employee);
    return this.http.post(`${this.baseUrl}`,employee);
  }


}
