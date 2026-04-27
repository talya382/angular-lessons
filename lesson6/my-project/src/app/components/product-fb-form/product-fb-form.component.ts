import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-product-fb-form',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-fb-form.component.html',
  styleUrl: './product-fb-form.component.scss',
})
export class ProductFbFormComponent {
  // הזרקת FormBuilder
  private fb = inject(FormBuilder);

  // רשימת חברות לבחירה
  companies: string[] = ['תנובה', 'שטראוס', 'אסם', 'עלית', 'אנג׳ל', 'יטבתה'];

  // רשימת המוצרים שנשמרו
  products: any[] = [];

  // הטופס הראשי - עם כל היופי של FormBuilder
  productForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[a-zA-Zא-ת0-9 ]+$/),
      ],
    ],
    price: [0, [Validators.required, Validators.min(0)]],
    manufactureDate: [new Date()],

    // FormGroup מקונן - פרטי יצרן
    manufacturer: this.fb.group({
      company: ['', Validators.required],
      address: [''],
    }),

    // FormArray ריק לקטגוריות
    categories: this.fb.array([]),
  });

  // Getters לגישה נוחה ל-HTML
  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get manufacturer() {
    return this.productForm.get('manufacturer');
  }

  get company() {
    return this.productForm.get('manufacturer.company');
  }

  get categories(): FormArray {
    return this.productForm.get('categories') as FormArray;
  }

  // הוספת קטגוריה - שימי לב! גם כאן fb.control() במקום new FormControl()
  addCategory(): void {
    this.categories.push(this.fb.control('', Validators.required));
  }

  removeCategory(index: number): void {
    this.categories.removeAt(index);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      console.log('המוצר שנשלח:', formValue);

      this.products.push({ ...formValue });

      // איפוס הטופס
      this.productForm.reset({
        name: '',
        price: 0,
        manufactureDate: new Date(),
        manufacturer: { company: '', address: '' },
      });
      this.categories.clear();
    }
  }
}