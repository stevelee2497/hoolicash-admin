import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCategoriesComponent } from './manage-categories.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [ManageCategoriesComponent],
  imports: [CommonModule, NzTableModule, NzDividerModule],
  exports: [ManageCategoriesComponent],
})
export class ManageCategoriesModule {}
