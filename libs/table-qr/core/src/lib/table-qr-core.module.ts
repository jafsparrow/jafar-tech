import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TableQrAuthentiicationDataAccessModule } from '@jafar-tech/table-qr/authentiication/data-access';
import { ErrorInterceptor, TokenInterceptor } from './token.intercenptor';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TableQrAuthentiicationDataAccessModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
})
export class TableQrCoreModule {}
