import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
