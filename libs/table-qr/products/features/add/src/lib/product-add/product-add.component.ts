import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'jafar-tech-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productBasicInfo: FormGroup = new FormGroup({});
  modifierGroups: FormGroup = new FormGroup({});
  productAddForm?: FormGroup;
  isEditable = false;

  categories = ['Fresh Juice', 'Mojito', 'Broasted', 'Shawarma'];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
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

    this.modifierGroups = this._formBuilder.group({
      modifiers: this._formBuilder.array([]),
    });
    this.productAddForm = new FormGroup({
      productBasicForm: this.productBasicInfo,
      modifierForm: this.modifierGroups,
    });
  }

  get modifiers(): FormArray {
    return this.modifierGroups.controls['modifiers'] as FormArray;
  }

  disableForm() {
    // this.firstFormGroup.disable({ emitEvent: false });
  }
  addAModifier() {
    let modifier: FormGroup = this._formBuilder.group({
      description: ['', Validators.required],
      printName: [''],
      modifierItems: this._formBuilder.array([this.emptyModifierItem()]),
    });

    this.modifiers.push(modifier);
  }

  getModifierItems(modifier: any): FormArray {
    return modifier.controls['modifierItems'] as FormArray;
  }

  addModifierItem(i: number) {
    const control = (
      this.modifierGroups.get('modifiers') as FormArray
    ).controls[i].get('modifierItems') as FormArray;

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
      this.modifierGroups.get('modifiers') as FormArray
    ).controls[i].get('modifierItems') as FormArray;
    controls.removeAt(j);
  }

  addNewProduct() {
    console.log({
      ...this.productBasicInfo?.value,
      ...this.modifierGroups.value,
    });
    console.log(this.productAddForm?.value);
  }
}
