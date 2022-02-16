import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { selectInCartProductCount } from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  productInTheCartAlready$ = this.store.select(selectInCartProductCount, {
    id: '620872e9586ea1c3df27941b',
  });
  sampleProd = {
    _id: '620872e9586ea1c3df27941b',
    category: 'juice',
    popular: false,
    video: null,
    archived: false,
    price: 33,
    onSale: true,
    isAvailable: true,
    image: null,
    description: 'amul treety',
    name: 'cuckhedo crop truthy',
  };

  ngOnInit(): void {}

  closeButtonClicked() {
    this.router.navigate(['..']);
  }
}
