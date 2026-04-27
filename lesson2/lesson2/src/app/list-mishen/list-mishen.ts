import { Component } from '@angular/core';
import { Todo, TodoStatus } from '../to-do/to-do';
import { FormsModule } from '@angular/forms'; // 1. ייבוא המודול מהספריה
import { CommonModule } from '@angular/common'; // אופציונלי עבור פיצ'רים נוספים
@Component({
  selector: 'app-list-mishen',
  imports: [FormsModule,     // 2. הוספה לרשימת הייבוא של הקומפוננטה
    CommonModule],
  templateUrl: './list-mishen.html',
  styleUrl: './list-mishen.scss',
})

export class ListMishen {
  todos: Todo[] = [
    {
      id: crypto.randomUUID(),
      title: 'לימוד פרק יומי',
      dueDate: '2026-02-06',
      status: TodoStatus.Done
    },
    {
      id: crypto.randomUUID(),
      title: 'הכנות לשבת',
      dueDate: '2026-02-06',
      status: TodoStatus.InProgress
    },
    {
      id: crypto.randomUUID(),
      title: 'חזרה על החומר באנגולר',
      dueDate: '2026-02-07',
      status: TodoStatus.NotDone
    }
  ];

  // פונקציית עדכון אחת לכל הסטטוסים
  updateStatus(todo: Todo, newStatus: string): void {
    // מכיוון שהסטטוס ב-Interface הוא מסוג TodoStatus (Enum)
    // אנחנו מבצעים הסבה (Casting) כדי לאפשר עדכון בטוח
    todo.status = newStatus as TodoStatus;
    
    console.log(`המשימה "${todo.title}" עודכנה לסטטוס: ${newStatus}`);
  }

  
  isOverdue(todo: Todo): boolean {
    // אם לא הוגדר תאריך, או שהמשימה כבר בוצעה - אין צורך לסמן כאיחור
    if (!todo.dueDate || todo.status === TodoStatus.Done) {
      return false;
    }
  
    const today = new Date();
    today.setHours(0, 0, 0, 0); // מאפסים שעות כדי להשוות רק תאריכים
    
    const taskDate = new Date(todo.dueDate);
    
    // החזרת true אם תאריך המשימה קטן מהיום
    return taskDate < today;
  }
  // הפעלת מצב עריכה
// פונקציית עריכה משופרת (Toggle)
toggleEdit(todo: Todo): void {
  if (todo.isEditing) {
    // אם המשתמש לוחץ שוב על "ערוך" בזמן שהוא כבר עורך - אנחנו סוגרים ושומרים
    this.saveTask(todo);
  } else {
    // אם הוא לא בעריכה - נפתח אותה
    todo.isEditing = true;
  }
}

saveTask(todo: Todo): void {
  // המרת המחרוזת מה-input לאובייקט Date אמיתי
  if (todo.dueDate) {
    todo.dueDate = new Date(todo.dueDate);
  }
  
  // סגירת מצב העריכה
  todo.isEditing = false;
  
  console.log('המשימה נשמרה עם תאריך מעודכן:', todo.dueDate);
}
// משתנה שיחזיק את נתוני המשימה החדשה מהטופס
newTodo = {
  title: '',
  dueDate: ''
};

addTodo(): void {
  // וידוא שהשדות מלאים לפני הוספה
  if (this.newTodo.title.trim() && this.newTodo.dueDate) {
    
    // יצירת משימה חדשה עם כל התנאים שביקשת
    const taskToAdd: Todo = {
      // 1. קוד ייחודי (UUID)
      id: crypto.randomUUID(), 
      
      title: this.newTodo.title,
      
      // 2. הפיכת המחרוזת מהאינפוט לאובייקט Date
      dueDate: new Date(this.newTodo.dueDate), 
      
      // 3. סטטוס התחלתי קבוע
      status: TodoStatus.NotDone, 
      
      isEditing: false
    };

    // הוספה לראש המערך
    this.todos.unshift(taskToAdd);

    // 4. ריקון הטופס
    this.newTodo = {
      title: '',
      dueDate: ''
    };
    
    console.log('משימה חדשה נוספה עם מזהה:', taskToAdd.id);
  }
}
// פונקציה למחיקת משימה לפי אינדקס
deleteTask(index: number): void {
  // השימוש ב-splice משנה את המערך הקיים (In-place) 
  // הפרמטר הראשון הוא המיקום, והשני הוא מספר האיברים להסרה
  this.todos.splice(index, 1);
  
  console.log(`משימה באינדקס ${index} נמחקה בהצלחה`);
}
}
