import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTabsModule} from '@angular/material/tabs';


import { ExpAddEditComponent } from './expenses/exp-add-edit/exp-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { UserAddEditComponent } from './users/user-add-edit/user-add-edit.component';
import { ImageViewComponent } from './users/image-view/image-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpAddEditComponent,
    UsersListComponent,
    ExchangeRatesComponent,
    ExpensesListComponent,
    UserAddEditComponent,
    ImageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
