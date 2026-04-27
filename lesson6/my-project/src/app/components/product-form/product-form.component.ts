import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  // רשימת חברות לבחירה
  companies: string[] = ['תנובה', 'שטראוס', 'אסם', 'עלית', 'אנג׳ל', 'יטבתה'];

  // המוצר שמוקלד בטופס
  product: Product = new Product('', 0, new Date(), '', []);

  // שדה עזר לקטגוריות (כמחרוזת מופרדת בפסיקים)
  categoriesInput: string = '';

  // רשימת המוצרים שנשמרו
  products: Product[] = [];

  // מתבצע כשהמשתמש משנה את שדה הקטגוריות
  onCategoriesChange(value: string): void {
    if (value && value.trim()) {
      this.product.categories = value.split(',').map((c) => c.trim());
    } else {
      this.product.categories = [];
    }
  }

  // פונקציה שמופעלת בלחיצה על "שלח"
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('המוצר שנשלח:', this.product);

      // הוספה לרשימה
      this.products.push({ ...this.product });

      // איפוס הטופס
      form.resetForm();
      this.product = new Product('', 0, new Date(), '', []);
      this.categoriesInput = '';
    }
  }
}