import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { ExpAddEditComponent } from '../exp-add-edit/exp-add-edit.component';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit{

  expensesList:any;

  constructor(private _dialog:MatDialog,private _expService:ExpenseService,
    private _coreService:CoreService){

  }
  ngOnInit(): void {
    this.getExpensesList();
  }

  openAddExpense(){
    const dialogRef= this._dialog.open(ExpAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getExpensesList();
        }
      }
    })

  }

  getExpensesList(){
    this._expService.getExpenses().subscribe({
      next:(res)=>{
        this.expensesList=res;
        console.log("list:",res)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteExpense(id:number){
    this._expService.deleteExpense(id).subscribe({
      next:(res)=>{
        this.expensesList=res;
        console.log("list:",res)
        this._coreService.openSnackBar('Expense Deleted','done')
        this.getExpensesList();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openEditForm(data:any){
    const dialogRef = this._dialog.open(ExpAddEditComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getExpensesList();
        }
      }
    })
  }

}
