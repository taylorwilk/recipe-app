import { LoggingService } from './../logging.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListEditComponent } from './list-edit/list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule ({
  declarations: [
    ShoppingListComponent,
    ListEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent}
    ]),
    SharedModule,
    FormsModule
  ]
})

export class ShoppingListModule {}
