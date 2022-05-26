import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { Route, RouterModule } from '@angular/router';
import { TitleModule } from 'src/app/components/title/title.module';

const routes: Route[] = [
  {
    path: '',
    component: QuestionsComponent,
  },
];

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TitleModule],
})
export class QuestionsModule {}
