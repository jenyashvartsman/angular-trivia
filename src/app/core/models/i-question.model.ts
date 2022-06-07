import { EAnswerType } from './e-answer.type';
import { EDifficultyType } from './e-difficulty.type';

export interface IQuestionsWrapper {
  response_code: number;
  results: IQuestionModel[];
}

export interface IQuestionModel {
  category: string;
  question: string;
  difficulty: EDifficultyType;
  correct_answer: string;
  incorrect_answers: string[];
  type: EAnswerType;

  // combinded answers
  answers?: string[];
}
