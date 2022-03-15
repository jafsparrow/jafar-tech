import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModifierGroupsEntity, Product } from '@jafar-tech/shared/data-access';
import { addProduct } from '@jafar-tech/table-qr-products-data-access';
import { DialogData } from '@jafar-tech/table-qr/products/features/detail';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productBasicInfo: FormGroup = new FormGroup({});
  modifierGroupsForm: FormGroup = new FormGroup({});
  productAddForm?: FormGroup;
  isEditable = false;

  categories = ['Fresh Juice', 'Mojito', 'Broasted', 'Shawarma'];

  isEdit: boolean = true;

  sample_product = {
    category: 'Broasted',
    video: '',
    cost: 33,
    printName: 'hello print',
    price: 65,
    onSale: true,
    isAvailable: true,
    description: 'Hello world',
    name: 'Mancs Platter chicken',
  };

  sample_modifiers: ModifierGroupsEntity[] = [
    {
      description: 'hello caetg',
      printName: 'print me fuck',
      modifiers: [
        { description: 'hello shit dude', price: 33 },
        { description: 'hello setting newl dude', price: 66 },
      ],
    },
    {
      description: 'super shit',
      printName: 'cool as super shitttt',
      modifiers: [
        { description: 'amazing kachara', price: 33 },
        { description: 'amazing kachara', price: 33 },
      ],
    },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.isEdit = this.data.isEdit ? this.data.isEdit : false;
  }
  ngOnInit() {
    this.setupProductBasicInfoForm();
    this.setupModifierGroupForm();
    this.setupAddFroms();
    if (this.isEdit) {
      this.productBasicInfo.patchValue(this.data.product);

      (this.modifierGroupsForm.get('modifiers') as FormArray).clear();

      if (this.data.product.modifierGroups?.length) {
        this.data.product.modifierGroups!.forEach((modifiers) => {
          let modfierGroupFrom = this.emptyModifierFrom();
          modfierGroupFrom.patchValue(modifiers);
          // formarray needs to be clear, otherwise patch value taking the first item by default
          (modfierGroupFrom.get('modifiers') as FormArray).clear();

          modifiers.modifiers?.forEach((modifier) => {
            let modifierItemForm = this.emptyModifierItem();
            modifierItemForm.patchValue(modifier);
            (modfierGroupFrom.get('modifiers') as FormArray).push(
              modifierItemForm
            );
          });
          this.modifiers.push(modfierGroupFrom);
        });
      }
    }
  }

  setupAddFroms() {
    this.productAddForm = new FormGroup({
      productBasicForm: this.productBasicInfo,
      modifierForm: this.modifierGroupsForm,
    });
  }

  setupModifierGroupForm() {
    this.modifierGroupsForm = this._formBuilder.group({
      modifierGroups: this._formBuilder.array([]),
    });
  }

  setupProductBasicInfoForm() {
    this.productBasicInfo = this._formBuilder.group({
      description: ['', Validators.required],
      isAvailable: [true, Validators.required],
      onSale: [true, Validators.required],
      price: ['', Validators.required],
      cost: [''],
      name: ['', Validators.required],
      category: ['', Validators.required],
      video: [''],
      printName: [''],
    });
  }

  get modifiers(): FormArray {
    return this.modifierGroupsForm.controls['modifierGroups'] as FormArray;
  }

  disableForm() {
    // this.firstFormGroup.disable({ emitEvent: false });
  }
  addAModifier() {
    let modifier: FormGroup = this.emptyModifierFrom();

    this.modifiers.push(modifier);
  }

  emptyModifierFrom() {
    return this._formBuilder.group({
      description: ['', Validators.required],
      printName: [''],
      modifiers: this._formBuilder.array([this.emptyModifierItem()]),
    });
  }

  getModifierItems(modifier: any): FormArray {
    return modifier.controls['modifiers'] as FormArray;
  }

  addModifierItem(i: number) {
    const control = (
      this.modifierGroupsForm.get('modifierGroups') as FormArray
    ).controls[i].get('modifiers') as FormArray;

    control.push(this.emptyModifierItem());
  }

  emptyModifierItem() {
    return this._formBuilder.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  deleteModifier(i: number) {
    this.modifiers.removeAt(i);
  }

  deleteModifierItem(i: number, j: number) {
    const controls = (
      this.modifierGroupsForm.get('modifierGroups') as FormArray
    ).controls[i].get('modifiers') as FormArray;
    controls.removeAt(j);
  }

  addNewProduct() {
    let product: Product = {
      ...this.productBasicInfo?.value,
      ...this.modifierGroupsForm.value,
    };
    this.store.dispatch(addProduct({ product }));
    console.log(this.productAddForm?.value);
  }

  updateProduct() {}
}
