import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { RouterModule } from '@angular/router';
import { SingnupComponent } from './singnup/singnup.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TableQrAuthenticationDataAccessModule } from '@jafar-tech/table-qr-authentication-data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: SinginComponent,
      },
      {
        path: 'signup',
        component: SingnupComponent,
      },
    ]),
    ReactiveFormsModule,
    TableQrAuthenticationDataAccessModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [SinginComponent, SingnupComponent],
})
export class TableQrAuthenticationFeaturesSingninModule {}
