import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CreateCategoryComponent } from './create-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CreateCategoryComponent],
  imports: [CommonModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzButtonModule],
  exports: [CreateCategoryComponent],
})
export class CreateCategoryModule {}
