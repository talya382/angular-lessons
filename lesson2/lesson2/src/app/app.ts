import { Component, signal } from '@angular/core';
import { ListMishen } from "./list-mishen/list-mishen";

@Component({
  selector: 'app-root',
  imports: [ListMishen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
   title = 'מערכת ניהול המשימות שלי';;
}
