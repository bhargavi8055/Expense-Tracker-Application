import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {
  userForm:FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private _fb:FormBuilder,private _userService:UserService,private _dialogRef:MatDialogRef<UserAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _coreService :CoreService
  ){
    this.userForm=this._fb.group({
      userName:'',
      email:'',
      image:''
    })
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.userForm.patchValue({
          image: reader.result
        });
      };
    }
  }

  onFormSubmit(){
    if(this.userForm.valid){
      if(this.data){
        this._userService.updateUser(this.data.id,this.userForm.value)
        .subscribe({
          next:(val:any)=>{
            this._coreService.openSnackBar('User updated successfully')
            this._dialogRef.close(true);
          },
          error:(err)=>{
            console.log(err)
          }
        })
      }
      else{
          this._userService.addUser(this.userForm.value)
        .subscribe({
          next:(val:any)=>{
            this._coreService.openSnackBar('User added successfully')
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
