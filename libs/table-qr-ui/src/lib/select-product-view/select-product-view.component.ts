import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModifierGroupsEntity, Product } from '@jafar-tech/shared/data-access';

@Component({
  selector: 'qr-ui-select-product-view',
  templateUrl: './select-product-view.component.html',
  styleUrls: ['./select-product-view.component.scss'],
})
export class SelectProductViewComponent implements OnInit {
  @Input('selectedCount') selectedCount!: number | null;
  @Input('product') product?: Product;
  @Input('error') error: any = 'hello';
  @Output()
  countChange = new EventEmitter<number>();

  @Output('addToCart') addProductToCart = new EventEmitter<any>();
  @Output('closeButtonClicked') closeButtonClick = new EventEmitter<any>();

  favoriteSeason?: string;
  constructor() {}

  ngOnInit(): void {
    // console.log('error', this.error);
  }

  getModifier(modifierObject: any): ModifierGroupsEntity {
    return {
      description: modifierObject.description,
      price: modifierObject.price,
    };
  }
  clickToCart() {
    // console.log('click to cart');

    this.addProductToCart.emit(this.selectedCount);
  }
  closeButtonClicked() {
    this.closeButtonClick.emit('close button clicked');
  }
}
