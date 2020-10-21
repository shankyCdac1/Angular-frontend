import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LobComponent } from './lob/lob.component';
import { CondoComponent } from './condo/condo.component';

const routes: Routes = [
  {path : 'employee', component : EmpListComponent},
  {path : 'addEmployee', component : CreateEmployeeComponent },
  {path : 'lob', component : LobComponent, children : [ {path : 'condo', component : CondoComponent} ]},
  {path : '', redirectTo: 'employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
