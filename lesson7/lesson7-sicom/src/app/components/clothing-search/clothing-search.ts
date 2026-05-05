import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClothingService } from '../../services/clothing';
import { Clothing } from '../../models/clothing';

@Component({
  selector: 'app-clothing-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],  // ⬅️ הוספת RouterLink
  templateUrl: './clothing-search.html',
  styleUrl: './clothing-search.scss'
})
export class ClothingSearchComponent {

  searchText: string = '';           // הטקסט שהמשתמשת מקלידה
  searchResults: Clothing[] = [];   // תוצאות החיפוש
  hasSearched: boolean = false;      // האם בוצע חיפוש (לצורך הצגת "לא נמצאו תוצאות")

  constructor(private clothingService: ClothingService) { }

  // 🔍 מתודת החיפוש - מופעלת בלחיצה על הכפתור
  search(): void {
    this.hasSearched = true;
    this.searchResults = this.clothingService.searchClothesByName(this.searchText);
  }
}