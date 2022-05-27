import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EAnswerType } from '../models/e-answer.type';
import { EDifficultyType } from '../models/e-difficulty.type';
import { EQuestionsCountType } from '../models/e-questions-count.type';
import { IQuestionsWrapper } from '../models/i-question.model';

@Injectable({
  providedIn: 'root',
})
export class TriviaQuestionsService {
  private readonly apiUrl = 'https://opentdb.com/api.php';

  constructor(private readonly http: HttpClient) {}

  getQuestions(
    difficulty: EDifficultyType,
    answers: EAnswerType,
    questionsCount: EQuestionsCountType
  ): Observable<IQuestionsWrapper[]> {
    const params = {
      amount: questionsCount,
      difficulty: difficulty,
      type: answers,
    };
    return this.http.get<IQuestionsWrapper[]>(this.apiUrl, { params });
  }
}
