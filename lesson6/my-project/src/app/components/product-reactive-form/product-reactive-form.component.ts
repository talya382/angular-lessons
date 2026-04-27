import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-reactive-form',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-reactive-form.component.html',
  styleUrl: './product-reactive-form.component.scss',
})
export class ProductReactiveFormComponent {
  // הזרקת FormBuilder - דרך נוחה ליצור טפסים
  private fb = inject(FormBuilder);

  // רשימת חברות לבחירה
  companies: string[] = ['תנובה', 'שטראוס', 'אסם', 'עלית', 'אנג׳ל', 'יטבתה'];

  // רשימת המוצרים שנשמרו
  products: Product[] = [];

  // הגדרת הטופס באמצעות FormBuilder
  productForm: FormGroup = this.fb.group({
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
    company: [''],
    categories: this.fb.array([]), // ← FormArray ריק להתחלה
  });

  // Getter נוח לגישה ל-FormArray של הקטגוריות
  get categories(): FormArray {
    return this.productForm.get('categories') as FormArray;
  }

  // Getters נוחים לבדיקת שגיאות ב-HTML
  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  // הוספת קטגוריה חדשה ל-FormArray
  addCategory(): void {
    const categoryControl = new FormControl('', Validators.required);
    this.categories.push(categoryControl);
  }

  // הסרת קטגוריה לפי אינדקס
  removeCategory(index: number): void {
    this.categories.removeAt(index);
  }

  // טיפול בלחיצה על שלח
  onSubmit(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;

      const newProduct = new Product(
        formValue.name,
        formValue.price,
        formValue.manufactureDate,
        formValue.company,
        formValue.categories
      );

      console.log('המוצר שנשלח:', newProduct);

      // הוספה לרשימה
      this.products.push(newProduct);

      // איפוס הטופס
      this.productForm.reset({
        name: '',
        price: 0,
        manufactureDate: new Date(),
        company: '',
      });

      // ניקוי FormArray של הקטגוריות
      this.categories.clear();
    }
  }
}