import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./views/questions/questions.module').then(
        (m) => m.QuestionsModule
      ),
  },
  {
    path: 'score',
    loadChildren: () =>
      import('./views/score/score.module').then((m) => m.ScoreModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./views/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
