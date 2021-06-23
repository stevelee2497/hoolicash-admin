import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManageUsersComponent } from './manage-users.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [CommonModule, NzTableModule, NzDividerModule],
  declarations: [ManageUsersComponent],
  exports: [ManageUsersComponent],
})
export class ManageUsersModule {}
