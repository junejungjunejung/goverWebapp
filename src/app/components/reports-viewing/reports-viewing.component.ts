import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/Report';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../services/report.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reports-viewing',
  templateUrl: './reports-viewing.component.html',
  styleUrls: ['./reports-viewing.component.scss']
})
export class ReportsViewingComponent implements OnInit {
  
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(private reportService: ReportService, private router: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.router.snapshot.paramMap.get('id')) {
      this.loadReport(this.router.snapshot.paramMap.get('id'));
    }
  }

  report: Report;
  
  loadReport(reportId){

    console.log("loadReport");
    let reportObs: Observable<Report>;
    reportObs = this.reportService.fetchReport(reportId);

    reportObs.subscribe(
      resData => {
        console.log(resData);
        this.report = resData;
      },
      errorMsg => {
        console.log(errorMsg);
      }
    )
  }
}
