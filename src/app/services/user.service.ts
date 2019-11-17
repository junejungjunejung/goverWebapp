import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

export interface AuthResponseData {
  access: string;
  refresh: string;
}

export interface UserResponseData {
  picture: string;
  id: number;
  username: string;
  last_name: string;
  bio: string;
  email: string;
  first_name: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;

  //Subject object which will notify the changes in the user object
  userSubject = new Subject<User>();

  constructor(private http: HttpClient) { 
    this.user = 
      {
        name: 'Deninho',
        accessToken: '',
        refreshToken:'',
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

  getUserInfo(email: string) {
    return this.http
    .get<UserResponseData>(
      'https://greenfillproject.com/api/users/get_by_username/?username='+ email
    )
    .pipe(
      catchError(this.handleError),
      tap(userRes => {
        this.userAuthentication(
          userRes.first_name,
          userRes.last_name
        )

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
    this.user.accessToken = access;
    this.user.refreshToken = refresh;
  }

  private userAuthentication(
    first_name: string,
    last_name: string
  ){
    this.user.name = first_name +' '+ last_name;

    const user = new User();
    user.accessToken = this.user.accessToken;
    user.refreshToken = this.user.refreshToken;
    user.name = this.user.name;
    this.userSubject.next(user);
  }

  getUser(): User {
    return this.user;
  }
}
