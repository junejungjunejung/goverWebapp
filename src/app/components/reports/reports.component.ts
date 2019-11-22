import { Component, OnInit } from '@angular/core';

import { Report } from '../../models/Report';

import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent  {

  reports: Report[];

  // page = 1;
  // pageSize = 4;
  // collectionSize = this.reports.length;

  // get getReports(): Report[] {
  //   return this.reports
  //     .map((report, i) => ({id: i + 1, ...report}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reports = this.reportService.getReports();
  }

}
