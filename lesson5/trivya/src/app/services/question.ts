import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../question/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'https://adi-teacher-api.onrender.com/quizzes';
  private user = 'xxx';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}?user=${this.user}`);
  }

  addQuestion(q: Question): Observable<any> {
    const body = {
      question: q.question,
      answers: q.answers,
      correctAnswer: q.correctAnswer,
      user: this.user
    };
    return this.http.post(this.apiUrl, body);
  }
}