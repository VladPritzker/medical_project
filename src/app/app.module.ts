import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AuthService } from './auth/auth.service';
import { UserService } from './user-account/user.service';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user-account', component: UserAccountComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
