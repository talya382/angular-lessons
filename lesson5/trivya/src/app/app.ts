import { Component } from '@angular/core';
import { QuestionListComponent } from './components/question-list/question-list';
import { AddQuestionComponent } from './components/add-question/add-question';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionListComponent, AddQuestionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}