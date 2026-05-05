import { inject, Injectable } from '@angular/core';
import { Clothing } from '../models/clothing';

@Injectable({
  providedIn: 'root',
})
 
 export class ClothingService {
  
  private clothes: Clothing[];

  constructor() {
    this.clothes = [
      {
        code: 101,
        name: 'חולצה כחולה',
        description: 'חולצת כותנה נוחה לקיץ',
        price: 89.90,
        image: 'assets/images/shirt-blue.jpg'
      },
      {
        code: 102,
        name: 'מכנסיים שחורים',
        description: 'מכנסיים אלגנטיים',
        price: 199.90,
        image: 'assets/images/pants-black.jpg'
      },
      {
        code: 103,
        name: 'מעיל חורף',
        description: 'מעיל חם ועמיד למים',
        price: 349.00,
        image: 'assets/images/coat.jpg'
      },
      {
        code: 104,
        name: 'נעלי ספורט',
        description: 'נעלי ריצה קלות ונוחות',
        price: 259.90,
        image: 'assets/images/sneakers.jpg'
      }
    ];
  }
  // מתודה להחזרת כל הבגדים
  getAllClothes(): Clothing[] {
    return this.clothes;
  }

  // מתודה להחזרת בגד לפי קוד
  getClothingByCode(code: number): Clothing | undefined {
    return this.clothes.find(c => c.code === code);
  }
    // מתודה לחיפוש בגדים שהשם שלהם מכיל טקסט מסוים
  searchClothesByName(searchText: string): Clothing[] {
  if (!searchText) {
    return [];
  }
  return this.clothes.filter(c => 
    c.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
}
