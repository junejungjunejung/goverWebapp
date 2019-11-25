import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Report } from '../../models/Report';

import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent  {

  reports: Report[] = [];

  page = 1;
  pageSize = 7;
  collectionSize = 0;

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.loadReports();
  }

  private loadReports() {
    let reportObs: Observable<Report[]>;
    reportObs = this.reportService.getReports();

    reportObs.subscribe(
      resData => {
        this.reports = resData;
        this.collectionSize = this.reports.length;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  get getReports(): Report[] {
    return this.reports
      .map((report, i) => ({id: i + 1, ...report}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
