import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTransactionsComponent } from './manage-transactions.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [ManageTransactionsComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule,
    NzButtonModule,
    NzNotificationModule,
  ],
  exports: [ManageTransactionsComponent],
})
export class ManageTransactionsModule {}
