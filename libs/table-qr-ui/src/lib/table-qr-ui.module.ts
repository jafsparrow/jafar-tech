import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountControlComponent } from './count-control/count-control.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { MenuProductCardComponent } from './menu-product-card/menu-product-card.component';

import { MatCardModule } from '@angular/material/card';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDividerModule } from '@angular/material/divider';
import { SelectProductViewComponent } from './select-product-view/select-product-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BottomCartSummaryComponent } from './bottom-cart-summary/bottom-cart-summary.component';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  declarations: [
    CountControlComponent,
    MenuProductCardComponent,
    SelectProductViewComponent,
    ToolbarComponent,
    BottomCartSummaryComponent,
  ],
  exports: [
    CountControlComponent,
    MenuProductCardComponent,
    SelectProductViewComponent,
    ToolbarComponent,
    MatTabsModule,
    BottomCartSummaryComponent,
  ],
})
export class TableQrUiModule {}
