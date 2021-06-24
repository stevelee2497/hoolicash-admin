import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageUsersModule } from './pages/manage-users/manage-users.module';
import { LayoutsModule } from './layouts/layouts.module';
import { CreateUserModule } from './pages/create-user/create-user.module';
import { ManageCategoriesModule } from './pages/manage-categories/manage-categories.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './pages/login/login.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutsModule,
    CreateUserModule,
    ManageUsersModule,
    ManageCategoriesModule,
    AppRoutingModule,
    LoginModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
