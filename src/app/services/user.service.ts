import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

export interface AuthResponseData {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;

  constructor(private http: HttpClient) { 
    this.user = 
      {
        name: 'Deninho'
      }
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://greenfillproject.com/api/token/',
        { //sending parameters to the API via POST method
          username: email,
          password: password
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.access,
            resData.refresh
          );
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    switch (errorRes.status) {
      case 401:
        errorMessage = 'Email && || password do not exists';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(
    access: string,
    refresh: string

  ) {
    this.user.name = access;
  }

  getUser(): User {
    return this.user;
  }
}
