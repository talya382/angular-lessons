import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClothingService } from '../../services/clothing';
import { Clothing } from '../../models/clothing';
import { ClothingDetailsComponent } from '../clothing-details/clothing-details';

@Component({
  selector: 'app-clothing-list',
  standalone: true,
  imports: [CommonModule, ClothingDetailsComponent],  // ⬅️ הוספת קומפוננטת הפרטים
  templateUrl: './clothing-list.html',
  styleUrl: './clothing-list.scss'
})
export class ClothingListComponent implements OnInit {
  
  clothes: Clothing[] = [];
  selectedClothing: Clothing | undefined;  // ⬅️ הבגד שנבחר

  constructor(private clothingService: ClothingService) { }

  ngOnInit(): void {
    this.clothes = this.clothingService.getAllClothes();
  }

  // 🎯 מתודה שמופעלת בלחיצה על שם בגד
  selectClothing(clothing: Clothing): void {
    this.selectedClothing = clothing;
  }
}