import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzResultModule } from 'ng-zorro-antd/result';
import { CreateUserComponent } from './create-user.component';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, NzResultModule],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}
