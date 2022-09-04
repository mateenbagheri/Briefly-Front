import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { TopLinkComponent } from './components/top-link/top-link.component';
import { TopLinkChartComponent } from './components/top-link-chart/top-link-chart.component';
import { ReportService } from './shared/report.service';
import { ReportLayoutComponent } from './components/report-layout/report-layout.component';
import { ReportRoutingModule } from './report.routing';
import { AgGridModule } from 'ag-grid-angular';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    ReportLayoutComponent,
    HistoryComponent,
    TopLinkComponent,
    TopLinkChartComponent,
  ],
  imports: [CommonModule, ReportRoutingModule,AgGridModule,NgApexchartsModule],
  providers: [ReportService],
})
export class ReportModule {}
