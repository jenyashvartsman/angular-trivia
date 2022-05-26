import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import { Route, RouterModule } from '@angular/router';
import { TitleModule } from 'src/app/components/title/title.module';

const routes: Route[] = [
  {
    path: '',
    component: ScoreComponent,
  },
];

@NgModule({
  declarations: [ScoreComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TitleModule],
})
export class ScoreModule {}
