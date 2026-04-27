// מחזירים את product.ts למצב המקורי:
export class Product {
    constructor(
      public name: string,
      public price: number,
      public manufactureDate: Date,
      public company: string,
      public categories?: string[]
    ) {}
  }