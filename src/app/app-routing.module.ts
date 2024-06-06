import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/expenses',pathMatch:'full'},
  {path:'expenses',component:ExpensesListComponent},
  {path:'users',component:UsersListComponent},
  {path:'exchange-rates',component:ExchangeRatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
