import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user-account/:userId', component: UserAccountComponent },
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
    FormsModule, // Add FormsModule here
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
