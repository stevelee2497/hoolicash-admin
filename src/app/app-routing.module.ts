import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'users', pathMatch: 'full', redirectTo: '/users/create-user' },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'users/create-user',
    component: CreateUserComponent,
  },
  {
    path: 'users/manage-users',
    component: ManageUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
