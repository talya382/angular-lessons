import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question } from '../../question/question';
import { QuestionService } from '../../services/question';

@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-question.html',
  styleUrl: './add-question.scss'
})
export class AddQuestionComponent {
  questionText = '';
  answersText = '';
  correctIndex = 0;

  constructor(private questionService: QuestionService) {}

  submit() {
    if (!this.questionText || !this.answersText) return;
    const answers = this.answersText.split(',').map(a => a.trim());
    const newQ = new Question(this.questionText, answers, this.correctIndex);

    this.questionService.addQuestion(newQ).subscribe(() => {
      this.questionText = '';
      this.answersText = '';
      this.correctIndex = 0;
    });
  }
}