import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManageUsersComponent } from './manage-users.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  imports: [CommonModule, NzTableModule, NzDividerModule, NzSpinModule],
  declarations: [ManageUsersComponent],
  exports: [ManageUsersComponent],
})
export class ManageUsersModule {}
