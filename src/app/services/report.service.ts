import { Injectable } from '@angular/core';
import { Inspection } from '../models/Inspection';
import { Property } from '../models/Property';
import { Report } from '../models/Report';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReportService {
  reports: Report[];

  constructor(private http: HttpClient) {
    this.getReports();
  }

  getReports() {
    return this.http
      .get<[]>(
        'https://greenfillproject.com/api/report/'
      )
      .pipe(
        catchError(this.handleError),
        tap(reportsResponseData => console.log(reportsResponseData)),
        map(reportsResponseData => {
          const reportsArray: Report[] = [];
          // tslint:disable-next-line: forin
          for (const key in reportsResponseData) {
            if (reportsResponseData[key]['inspection_obj']) {
              const propertyAddress = reportsResponseData[key]['inspection_obj']['inspected_property']['address'];
              const propertyThumbnail = reportsResponseData[key]['inspection_obj']['inspected_property']['thumbnail'];
              const inspectionDate = reportsResponseData[key]['inspection_obj']['inspection_date'];
              const tenantName = reportsResponseData[key]['inspection_obj']['tenant_name'];

              const property = new Property(propertyAddress, propertyAddress, propertyThumbnail);
              const inspection = new Inspection(inspectionDate, 'Signed', property, tenantName, propertyThumbnail);
              const report = new Report();
              report.id = reportsResponseData[key]['id'];
              report.inspection = inspection;
              reportsArray.push(report);
            }
          }
          this.reports = reportsArray;
          return reportsArray;
        })
      );
  }

  fetchReport(reportId: number) {

    return this.http
      .get<Report>(
        'https://greenfillproject.com/api/report/' + reportId
      )
      .pipe(
        catchError(this.handleError),
        tap(reportResponseData => console.log(reportResponseData)),
        map(reportResponseData => {
          const report = new Report();
          const propertyAddress = reportResponseData['inspection_obj']['inspected_property']['address'];
          const propertyThumbnail = reportResponseData['inspection_obj']['inspected_property']['thumbnail'];
          const inspectionDate = reportResponseData['inspection_obj']['inspection_date'];
          const tenantName = reportResponseData['inspection_obj']['tenant_name'];
          const reportFile = reportResponseData['report_file']

          const property = new Property(propertyAddress, propertyAddress, propertyThumbnail);
          const inspection = new Inspection(inspectionDate, 'Signed', property, tenantName, propertyThumbnail);
          report.id = reportResponseData['id'];
          report.inspection = inspection;
          if (reportFile) {
            report.reportFile = reportFile.replace("http:", "https:");
          }

          return report;
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
