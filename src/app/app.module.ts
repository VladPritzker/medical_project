import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button'; // Add MatButtonModule for Angular Material buttons

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AppointmentModalComponent } from './user-account/appointment-modal/appointment-modal.component';
import { HealthHistoryModalComponent } from './user-account/health-history-modal/health-history-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'user-account/:userId', component: UserAccountComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserAccountComponent,
    AppointmentModalComponent,
    HealthHistoryModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule // Add MatButtonModule here
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
