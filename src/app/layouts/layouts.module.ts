import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutsComponent } from './layouts.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [CommonModule, NzLayoutModule, NzMenuModule, IconsProviderModule, AppRoutingModule],
  exports: [LayoutsComponent],
})
export class LayoutsModule {}
