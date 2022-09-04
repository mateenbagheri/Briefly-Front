import { Component, OnInit } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { UrlItem } from 'src/app/main/shared/models/url-item.model';
import { ReportService } from '../../shared/report.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public rowData$!: Observable<any>;
  public defaultColDef = {
  };

  public columnDefs = [
    { field: 'CollectionName',width: 150},
    { field: 'CreateDate',width: 150},
    { field: 'HitDate', width: 160 },
    { field: 'MainUrl' , width: 650},
    { field: 'FullShortenedUrl',  width: 370},

  ];
  constructor(private readonly reportSrv : ReportService ) { }

  ngOnInit(): void {
  }
  getHistory(){
    this.reportSrv.getHistroy().subscribe({
      next:(data)=>{
        this.rowData$ = of(data.message.map((url)=> new UrlItem(url)))
      }
    })
  }

  onGridReady(params: GridReadyEvent) {
    this.getHistory()
  }
}
