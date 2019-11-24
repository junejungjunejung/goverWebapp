import { Injectable } from '@angular/core';
import { Property } from '../models/Property';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  properties: Property[];

  constructor(private http: HttpClient) {
    this.getProperties();
   }

  getProperties(){
    return this.http
    .get<[]>(
      'https://greenfillproject.com/api/property/'
    )
    .pipe(
      catchError(this.handleError),
      tap(propertiesResponseData => console.log(propertiesResponseData)),
      map(propertiesResponseData => {
        const propertiesArray: Property[] = [];
        // tslint:disable-next-line: forin
        for (const key in propertiesResponseData) {
          const propertyAddress = propertiesResponseData[key]['address'];
          const propertyThumbnail = propertiesResponseData[key]['thumbnail'];

          const property = new Property
          (propertyAddress, propertyAddress, propertyThumbnail);
           propertiesArray.push(property);
        }
        this.properties = propertiesArray;
        return propertiesArray;
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
