import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private _http:HttpClient) { }

  addExpense(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/expenses',data);
  }

  updateExpense(id:number,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/expenses/${id}`,data);
  }

  getExpenses(){
    return this._http.get('http://localhost:3000/expenses');
  }
  deleteExpense(id:number){
    return this._http.delete(`http://localhost:3000/expenses/${id}`);
  }

}
