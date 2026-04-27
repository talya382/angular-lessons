import { Component } from '@angular/core';

  Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.scss',
})
// הגדרת enum עבור סטטוס המשימה
export enum TodoStatus {
  NotDone = 'NotDone',
  InProgress = 'InProgress',
  Done = 'Done'
}

// הגדרת ה-Interface
export interface Todo {
  // קוד משימה ייחודי
  id: string; 
  
  // כותרת המשימה
  title: string;
  
  // תאריך יעד - מוגדר כ-any לצורך binding גמיש מ-input
  dueDate: any;
  
  // סטטוס המשימה מתוך ה-Enum
  status: TodoStatus;
  isEditing?: boolean;
}
