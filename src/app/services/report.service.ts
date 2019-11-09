import { Injectable } from '@angular/core';
import { Inspection } from '../models/Inspection';
import { Property } from '../models/Property';
import { Report } from '../models/Report';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({ providedIn: 'root' })
export class ReportService {
  reports: Report[];

  constructor(private http: HttpClient) {

    this.reports = [
      { id: 1,
        inspection: new Inspection('Oct 31st -07:00pm','Signed',new Property('Isengard','North of the White Mountains and west of Anórien','../../assets/Isengard.jpg'),'Saruman',
        '../../assets/Isengard.jpg')
      },
      { id: 2,
        inspection: new Inspection('Oct 31st -07:00pm','Signed',new Property('Isengard','North of the White Mountains and west of Anórien','../../assets/Isengard.jpg'),'Saruman',
        '../../assets/Isengard.jpg')
      },
      { id: 3,
        inspection: new Inspection('Oct 31st -07:00pm','Signed',new Property('Isengard','North of the White Mountains and west of Anórien','../../assets/Isengard.jpg'),'Saruman',
        '../../assets/Isengard.jpg')
      }
    ]
  }

  getReports(): Report[]{
    return this.reports;
  }

  
  fetchReport(reportId: number) {
          
    // let report = new Report();
    // return report;

    return this.http
      .get<Report>(
        'http://159.65.44.135/api/report/' + reportId
      )
      .pipe(
        catchError(this.handleError),
        map(responseData => {
          let report = new Report();
          //report = responseData['company'];
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
