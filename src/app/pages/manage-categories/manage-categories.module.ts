import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCategoriesComponent } from './manage-categories.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ManageCategoriesRoutingModule } from './manage-categories-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [ManageCategoriesComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule,
    ManageCategoriesRoutingModule,
    NzButtonModule,
    NzNotificationModule,
  ],
  exports: [ManageCategoriesComponent],
})
export class ManageCategoriesModule {}
