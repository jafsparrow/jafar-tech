import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { ProductCountDialogComponent } from './product-count-dialog/product-count-dialog.component';

@Component({
  selector: 'jafar-tech-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('root app component On init');
  }
}
/*
count = 3;

subSection = [
  { name: 'Broasted', selected: false },
  { name: 'Juices', selected: false },
  { name: 'Shawarma', selected: false },
];

sampleProduct = {
  name: 'alpocino juicy',
  description:
    'amazing shit blend with lemon juince extra from the pussycat dolls sucked shit',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaScmFO9Oi--TpM-6OalpB6x-gSe2mbf2gQ&usqp=CAU',
  price: 130,
};
constructor() {}

test() {
  console.log('test');
}

addToCart(selectedCount: number, product: any) {
  console.log(selectedCount, product);
  console.log('addto carton button is clicked');
}


scrollToSelected(eventData: any) {
  // console.log(this.subSections.);
  console.log('hello', eventData);

  //     if(eventData.value == "Broasted") {
  // this.moveTo(this.broasted);
  //     } else if(eventData.value == "Juices"){
  // this.moveTo(this.juices);
  //     } else {

  //     }
}
*/
/*

moveTo(elementRef: ElementRef) {
  console.log('scrolling to view line');
  // this.broasted.nativeElement.scrollIntoView({behavior: "smooth", block: "start" })  //scrollToView({behavior: "smooth", block: "start" });

  // var element = document.getElementById(id);
  var element = elementRef.nativeElement;

  var headerOffset = 100;
  var elementPosition = element.offsetTop;
  var offsetPosition = elementPosition - headerOffset;
  document.documentElement.scrollTop = offsetPosition;
  // document.body.scrollTop = offsetPosition;
}

  // openProductViewDialog() {
  //   const dialogRef = this.dialog.open(ProductCountDialogComponent, {
  //     maxWidth: '100vw',
  //     maxHeight: '100vh',
  //     height: '100%',
  //     width: '100%',
  //     data: this.sampleProduct,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // openBasketDialog() {
  //   const basketdialogRef = this.dialog.open(OrderCartComponent, {
  //     maxWidth: '100vw',
  //     maxHeight: '100vh',
  //     height: '100%',
  //     width: '100%',
  //   });

  //   basketdialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // } */
