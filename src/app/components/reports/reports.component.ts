import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Report } from '../../models/Report';

import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reports: Report[];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.reports = this.reportService.getReports();
  }

}
