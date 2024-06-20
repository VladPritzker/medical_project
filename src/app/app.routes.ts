import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user-account/:user_id', component: UserAccountComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];
