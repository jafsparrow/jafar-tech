import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () =>
          import('@jafar-tech/table-qr-products-features-list').then(
            (m) => m.ProductsFeaturesListModule
          ),
      },
      {
        path: 'detail',
        loadChildren: () =>
          import('@jafar-tech/table-qr/products/features/detail').then(
            (m) => m.TableQrProductsFeaturesDetailModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProductComponent],
})
export class TableQrProductsFeaturesShellModule {}
