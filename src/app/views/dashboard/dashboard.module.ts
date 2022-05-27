import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { TitleModule } from 'src/app/components/title/title.module';
import { SelectButtonModule } from 'src/app/components/select-button/select-button.module';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleModule,
    SelectButtonModule,
  ],
})
export class DashboardModule {}
