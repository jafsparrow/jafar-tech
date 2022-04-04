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
import {
  addProduct,
  selectAddUpdateProductProgressFlag,
} from '@jafar-tech/table-qr-products-data-access';
import { DialogData } from '@jafar-tech/table-qr/products/features/detail';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  selectAddUpdateProductProgressFlag$ = this.store.select(
    selectAddUpdateProductProgressFlag
  );
  productBasicInfo: FormGroup = new FormGroup({});
  modifierGroupsForm: FormGroup = new FormGroup({});
  productAddForm?: FormGroup;
  isEditable = false;

  categories = [''];

  isEdit: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.isEdit = this.data.isEdit ? this.data.isEdit : false;
  }
  ngOnInit() {
    this.categories = this.data.categories!;
    this.setupProductBasicInfoForm();
    this.setupModifierGroupForm();
    this.setupAddFroms();
    this.productBasicInfo.patchValue({ category: this.data.category });
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
      code: [''],
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
    this.store.dispatch(
      addProduct({ companyId: '6226fbdaec38a5c0bd33ec74', product: product })
    );
    console.log(this.productAddForm?.value);
  }

  updateProduct() {}
}
