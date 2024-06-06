import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/services/user.service';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList:any;
  constructor(private _dialog:MatDialog,private _userService:UserService,
    private _coreService:CoreService){}

  ngOnInit(): void {
    this.getUsersList()
  }
  openAddUser(){
    const dialogRef= this._dialog.open(UserAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsersList();
        }
      }
    })

  }

  getUsersList(){
    this._userService.getUsers().subscribe({
      next:(res)=>{
        this.usersList=res;
        console.log("users list:",res)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteUser(id:number){
    this._userService.deleteUser(id).subscribe({
      next:(res)=>{
        this.usersList=res;
        console.log("list:",res)
        this._coreService.openSnackBar('User Deleted','done')
        this.getUsersList();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  openEditForm(data:any){
    const dialogRef = this._dialog.open(UserAddEditComponent,{
      data,
    });

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getUsersList();
        }
      }
    })
  }
  viewUserImage(user: any) {
    const dialogRef = this._dialog.open(ImageViewComponent, {
      data: {
        imageUrl: user.image // Pass the image URL or data to the ImageViewComponent
      }
    });

    // Optionally, subscribe to the afterClosed event to perform actions when the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }
}
