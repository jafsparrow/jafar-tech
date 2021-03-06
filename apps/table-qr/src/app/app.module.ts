import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductCountDialogComponent } from './product-count-dialog/product-count-dialog.component';

import { OrderCartComponent } from './order-cart/order-cart.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TableQrCoreModule } from '@jafar-tech/table-qr/core';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ProductCountDialogComponent,
    OrderCartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'shell',

          pathMatch: 'full',
        },
        {
          path: 'shell',
          loadChildren: () =>
            import('@jafar-tech/table-qr/shell').then(
              (m) => m.TableQrShellModule
            ),
        },
      ],
      {
        preloadingStrategy: PreloadAllModules,

        scrollPositionRestoration: 'enabled',
      }
    ),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    TableQrCoreModule,
  ],
  providers: [
    {
      provide: 'endPointURL',
      useValue: environment.apiUrl,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
