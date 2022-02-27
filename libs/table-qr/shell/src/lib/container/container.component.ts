import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { selectNumberOfItemsInCart } from '@jafar-tech/table-qr-cart-data-access';
import {
  loadProductsCategoryVice,
  selectProductByCategories,
} from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  cartCount$ = this.store.select(selectNumberOfItemsInCart);
  @ViewChild('drawer')
  drawer!: MatSidenav;

  prodcutByCategory$ = this.store.select(selectProductByCategories);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadProductsCategoryVice());
  }

  menuClicked(menu: string) {
    this.drawer.toggle();
    this.scrollTo(menu);
  }

  scrollTo(id: string) {
    document.getElementById(id)!.scrollIntoView();
  }
}
