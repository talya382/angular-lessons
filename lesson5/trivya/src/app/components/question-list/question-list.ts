import { Component, OnInit } from '@angular/core';
import { Question } from '../../question/question';
import { QuestionItemComponent } from '../question-item/question-item';
import { QuestionService } from '../../services/question';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [QuestionItemComponent, NgFor, NgIf],
  templateUrl: './question-list.html',
  styleUrl: './question-list.scss'
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.loadQuestions();
  }

  loadQuestions() {
    this.isLoading = true;
    this.errorMessage = '';

    this.questionService.getQuestions().subscribe({
      next: (data) => {
        this.questions = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'שגיאה בטעינת השאלות, נסי שוב';
        this.isLoading = false;
      }
    });
  }
}