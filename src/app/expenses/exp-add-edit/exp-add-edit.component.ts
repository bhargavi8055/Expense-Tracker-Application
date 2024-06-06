import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-exp-add-edit',
  templateUrl: './exp-add-edit.component.html',
  styleUrls: ['./exp-add-edit.component.scss']
})
export class ExpAddEditComponent implements OnInit {

    expForm:FormGroup;

    constructor(private _fb:FormBuilder,private _expService:ExpenseService,private _dialogRef:MatDialogRef<ExpAddEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any,
      private _coreService :CoreService
    ){
      this.expForm=this._fb.group({
        itemName:'',
        noOfItems:0,
        itemPrice:0
      })
    }
    ngOnInit(): void {
      this.expForm.patchValue(this.data)
    }

    onFormSubmit(){
      if(this.expForm.valid){
        if(this.data){
          this._expService.updateExpense(this.data.id,this.expForm.value)
          .subscribe({
            next:(val:any)=>{
              this._coreService.openSnackBar('Expense updated successfully')
              this._dialogRef.close(true);
            },
            error:(err)=>{
              console.log(err)
            }
          })
        }
        else{
            this._expService.addExpense(this.expForm.value)
          .subscribe({
            next:(val:any)=>{
              this._coreService.openSnackBar('Expense added successfully')
              this._dialogRef.close(true);
            },
            error:(err)=>{
              console.log(err)
            }
          })
        }
        
        
      }
    }
}
