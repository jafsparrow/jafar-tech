import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountControlComponent } from './count-control/count-control.component';

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

import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
    MatRadioModule,
  ],
  declarations: [
    CountControlComponent,
    MenuProductCardComponent,
    SelectProductViewComponent,
    ToolbarComponent,
    BottomCartSummaryComponent,
    SelectProductViewComponent,
  ],
  exports: [
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    CountControlComponent,
    MenuProductCardComponent,
    SelectProductViewComponent,
    ToolbarComponent,
    MatRadioModule,

    BottomCartSummaryComponent,
  ],
})
export class TableQrUiModule {}
