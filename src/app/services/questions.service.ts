import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Use observables for async simulation
import { questions } from '../data/question';
import { Question } from '../types/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor () { }

  // Gets all questions, returns an observable
  getQuestions(): Observable<Question[]> {
    return of(questions);
  }

  // Gets a single question by its ID, returns an observable
  getQuestionById(id: number): Observable<Question | undefined> {
    const question = questions.find((c) => c.id === id);
    return of(question);
  }
}
