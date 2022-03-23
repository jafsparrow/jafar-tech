import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedCoreModule } from '@jafar-tech/shared/core';
import { TableQrCoreModule } from '@jafar-tech/table-qr/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',

        loadChildren: () =>
          import('@jafar-tech/table-admin/shell').then(
            (m) => m.TableAdminShellModule
          ),
      },
    ]),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    HttpClientModule,
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
