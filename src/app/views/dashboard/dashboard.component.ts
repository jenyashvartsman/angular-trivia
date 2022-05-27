import { Component, OnInit } from '@angular/core';
import { EAnswerType } from 'src/app/core/models/e-answer.type';
import { EDifficultyType } from 'src/app/core/models/e-difficulty.type';
import { EQuestionsCountType } from 'src/app/core/models/e-questions-count.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  difficultyOptions: string[] = [];
  difficultySelected?: string;

  answerTypeOptions: string[] = [];
  answerTypeSelected?: string;

  questionsCountOptions: string[] = [];
  questionsCountSelected?: string;

  constructor() {}

  ngOnInit(): void {
    this.initOptions();
  }

  initOptions(): void {
    this.difficultyOptions = Object.values(EDifficultyType);
    this.difficultySelected = this.difficultyOptions[0];

    this.answerTypeOptions = Object.values(EAnswerType);
    this.answerTypeSelected = this.answerTypeOptions[0];

    this.questionsCountOptions = Object.values(EQuestionsCountType);
    this.questionsCountSelected = this.questionsCountOptions[0];
  }
}
