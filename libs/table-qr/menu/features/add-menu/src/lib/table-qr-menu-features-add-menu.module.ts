import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CartDataAccessModule } from '@jafar-tech/table-qr-cart-data-access';
import { TableQrCategoryDataAccessCategoryModule } from '@jafar-tech/table-qr/category/data-access/category';
import { TableQrOrganisationDataAccessModule } from '@jafar-tech/table-qr/organisation/data-access';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuCategoryProductListComponent } from './menu-category-product-list/menu-category-product-list.component';
import { TableQrUiModule } from '@jafar-tech/table-qr-ui';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MenuEditComponent }]),
    MatExpansionModule,
    MatIconModule,
    TableQrOrganisationDataAccessModule,
    TableQrCategoryDataAccessCategoryModule,
    DragDropModule,
    TableQrUiModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [
    MenuEditComponent,
    MenuCategoryProductListComponent,
    MenuCategoryComponent,
  ],
})
export class TableQrMenuFeaturesAddMenuModule {}
