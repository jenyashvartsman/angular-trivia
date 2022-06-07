import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './question-card.component';

@NgModule({
  declarations: [QuestionCardComponent],
  imports: [CommonModule],
  exports: [QuestionCardComponent],
})
export class QuestionCardModule {}
