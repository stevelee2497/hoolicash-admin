import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageWalletsComponent } from './manage-wallets.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [ManageWalletsComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule,
    NzButtonModule,
    NzNotificationModule,
  ],
  exports: [ManageWalletsComponent],
})
export class ManageWalletsModule {}
