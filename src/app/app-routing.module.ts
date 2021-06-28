import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Guard } from './utils/guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { LoginComponent } from './pages/login/login.component';
import { ManageCategoriesComponent } from './pages/manage-categories/manage-categories.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ManageTransactionsComponent } from './pages/manage-transactions/manage-transactions.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutsComponent,
    canActivate: [Guard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/welcome' },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      { path: 'users', pathMatch: 'full', redirectTo: '/users/create-user' },

      {
        path: 'users/create-user',
        component: CreateUserComponent,
      },
      {
        path: 'users/manage-users',
        component: ManageUsersComponent,
      },
      { path: 'categories', pathMatch: 'full', redirectTo: '/categories/create-category' },
      {
        path: 'categories/create-category',
        component: CreateCategoryComponent,
      },
      {
        path: 'categories/manage-categories',
        loadChildren: () =>
          import('./pages/manage-categories/manage-categories.module').then(
            (m) => m.ManageCategoriesModule
          ),
      },
      {
        path: 'transactions/manage-transactions',
        component: ManageTransactionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
