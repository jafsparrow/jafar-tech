import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserType } from '@jafar-tech/shared/data-access';
import { setCartCreatedForUser } from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';
import { startWith, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'jafar-tech-add-take-away',
  templateUrl: './add-take-away.component.html',
  styleUrls: ['./add-take-away.component.css'],
})
export class AddTakeAwayComponent implements OnInit, OnDestroy {
  takeAwayFormControl = new FormControl('', [Validators.required]);
  subscription!: Subscription;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.subscription = this.takeAwayFormControl.valueChanges.subscribe(
      (value) =>
        this.store.dispatch(
          setCartCreatedForUser({
            user: {
              firstName: `Takeout ${value}`,
              userType: UserType.TAKEAWAY,
            },
          })
        )
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
