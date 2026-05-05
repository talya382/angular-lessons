import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  // 🔐 מתודת ההתחברות
  login(): void {
    if (this.username === '1234' && this.password === '1234') {
      // התחברות הצליחה - ניווט לרשימת בגדים
      this.router.navigate(['/list']);
    } else {
      // התחברות נכשלה - הצגת הודעת שגיאה והישארות בדף
      this.errorMessage = '❌ שם משתמש או סיסמה שגויים';
      this.password = '';  // ניקוי הסיסמה לנוחות המשתמשת
    }
  }
}