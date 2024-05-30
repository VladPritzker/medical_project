import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user-account/:userId', component: UserAccountComponent }, // Ensure this is the correct path
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
