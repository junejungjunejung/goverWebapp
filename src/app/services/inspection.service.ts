import { Injectable } from '@angular/core';
import { Inspection } from '../models/Inspection';
import { Property } from '../models/Property';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InspectionService {
  inspections: Inspection[];

  constructor(private http: HttpClient) {
    this.getInspections();
  }

  getInspections(){
    return this.http
    .get<[]>(
      'https://greenfillproject.com/api/inspection/'
    )
    .pipe(
      catchError(this.handleError),
      tap(inspectionsResponseData => console.log(inspectionsResponseData)),
      map(inspectionsResponseData => {
        const inspectionsArray: Inspection[] = [];
        // tslint:disable-next-line: forin
        for (const key in inspectionsResponseData) {
          const propertyAddress = inspectionsResponseData[key]['inspected_property_obj']['address'];
          const propertyThumbnail = inspectionsResponseData[key]['inspected_property_obj']['thumbnail'];
          const inspectionDate = inspectionsResponseData[key]['inspection_date'];
          const tenantName = inspectionsResponseData[key]['tenant_name'];

          const property = new Property(propertyAddress, propertyAddress, propertyThumbnail);
          const inspection = new Inspection(inspectionDate, 'Signed', property, tenantName, propertyThumbnail);
          
          inspectionsArray.push(inspection);
        }
        this.inspections = inspectionsArray;
        return inspectionsArray;
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
