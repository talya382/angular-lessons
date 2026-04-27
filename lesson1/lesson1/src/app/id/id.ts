import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-id',
  imports: [CommonModule],
  templateUrl: './id.html',
  styleUrl: './id.scss',
  // שימוש בעיצוב אינליין בתוך קובץ ה-TS
  styles: [`
    .identity-card-wrapper {
      background-color: #fdfdfd;
      border: 2px solid #2c3e50;
      border-radius: 15px;
      padding: 25px;
      width: 300px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      direction: rtl; /* יישור לימין עבור עברית */
    }

    .info-row {
      margin-bottom: 12px;
      border-bottom: 1px solid #eee;
      padding-bottom: 5px;
      color: #34495e;
    }

    strong {
      color: #2980b9;
      margin-left: 5px;
    }

    button {
      background-color: #2980b9;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;
      margin-top: 10px;
    }

    button:hover {
      background-color: #3498db;
    }

    img {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px;
      background: white;
    }
  `]
})
export class Id {
  isIsraeli: boolean = true;
  firstName: string = 'ישראל';
  lastName: string = 'ישראלי';
  numberOfChildren: number = 0;
  idNumber: string = '012345678';
  birthDate: Date = new Date(1990, 0, 1);
  imageName: string = 'personid.ico';
  isPhotoHidden: boolean = false;
  calculateAge(): number {
    const today = new Date();
  const birthDate=new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();

     // בדיקה אם יום ההולדת כבר חל השנה
    const monthdiff=today.getMonth()-birthDate.getMonth();
    if(monthdiff<0 || (monthdiff===0 && today.getDate()<birthDate.getDate())){
      age--;
    }
    return age;
  }
  //  פונקציה לשינוי המצב
  togglePhoto(): void {
    this.isPhotoHidden = !this.isPhotoHidden;
  }
}
