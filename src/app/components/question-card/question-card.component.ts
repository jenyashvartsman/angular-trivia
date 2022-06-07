import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestionModel } from 'src/app/core/models/i-question.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  _question: IQuestionModel | null = null;
  userAnswer: string | null = null;

  @Input()
  set question(question: IQuestionModel) {
    this._question = question;
    this.userAnswer = null;
  }

  @Output() nextQuestionClick: EventEmitter<void> = new EventEmitter();
  @Output() userAnswered: EventEmitter<boolean> = new EventEmitter();

  userAnswerClick(answer: string): void {
    this.userAnswer = answer;
    this.userAnswered.emit(answer === this._question?.correct_answer);
  }
}
