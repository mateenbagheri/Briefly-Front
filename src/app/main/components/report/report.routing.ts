import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportLayoutComponent } from './components/report-layout/report-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ReportLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
