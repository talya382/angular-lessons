import { Component, Input } from '@angular/core';
import { Question } from '../../question/question';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question-item',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question-item.html',
  styleUrl: './question-item.scss'
})
export class QuestionItemComponent {
  @Input() question!: Question;
}