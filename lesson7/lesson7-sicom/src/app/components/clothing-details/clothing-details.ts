import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Clothing } from '../../models/clothing';
import { ClothingService } from '../../services/clothing';

@Component({
  selector: 'app-clothing-details',
  standalone: true,
  imports: [CommonModule, RouterLink],  // ⬅️ הוספת RouterLink לקישור
  templateUrl: './clothing-details.html',
  styleUrl: './clothing-details.scss'
})
export class ClothingDetailsComponent implements OnInit {

  @Input() clothing: Clothing | undefined;

  constructor(
    private route: ActivatedRoute,
    private clothingService: ClothingService
  ) { }

  ngOnInit(): void {
    // אם הקומפוננטה הופעלה כדף (דרך ניווט), נקרא את הקוד מה-URL
    this.route.paramMap.subscribe(params => {
      const code = params.get('code');
      if (code) {
        this.clothing = this.clothingService.getClothingByCode(+code);
      }
    });
  }
}