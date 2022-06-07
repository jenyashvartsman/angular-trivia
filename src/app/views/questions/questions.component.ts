import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaQuestionsService } from 'src/app/core/api/trivia-questions.service';
import { EAnswerType } from 'src/app/core/models/e-answer.type';
import { EDifficultyType } from 'src/app/core/models/e-difficulty.type';
import { EQuestionsCountType } from 'src/app/core/models/e-questions-count.type';
import {
  IQuestionModel,
  IQuestionsWrapper,
} from 'src/app/core/models/i-question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questionIndex = 0;
  questions: IQuestionModel[] = [];
  error = false;
  score = 0;

  constructor(
    private triviaQuestionsService: TriviaQuestionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { difficulty, questions, type } = this.route.snapshot.queryParams;
    this.getQuestions(difficulty, type, questions);
  }

  getQuestions(
    difficulty: EDifficultyType = EDifficultyType.EASY,
    type: EAnswerType = EAnswerType.MULTIPLE,
    questions: EQuestionsCountType = EQuestionsCountType.Q_10
  ): void {
    this.triviaQuestionsService
      .getQuestions(difficulty, type, questions)
      .subscribe({
        next: (res: IQuestionsWrapper) => this.mapQuestions(res),
        error: () => (this.error = true),
      });
  }

  mapQuestions(questionsWrapper: IQuestionsWrapper): void {
    this.error =
      questionsWrapper.response_code !== 0 ||
      questionsWrapper.results?.length === 0;
    this.questions = this.error
      ? []
      : questionsWrapper.results.map((question) => ({
          ...question,
          answers: this.shuffleAnswers([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        }));
  }

  shuffleAnswers(answers: string[]): string[] {
    return answers.sort(() => Math.random() - 0.5);
  }

  userAnswered(correct: boolean) {
    if (correct) {
      this.score += 10;
    }

    console.log(this.score);
  }
}
