import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../shared/report.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private readonly reportSrv : ReportService ) { }

  ngOnInit(): void {
  }
  getHistory(){
    this.reportSrv.getHistroy().subscribe({
      next:(data)=>{
        console.log( data);
        
      }
    })
  }
}
