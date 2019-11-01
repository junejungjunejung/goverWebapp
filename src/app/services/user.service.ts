import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;

  constructor() { 
    this.user = 
      {
        name: 'Deninho'
      }
  }

  getUser(): User {
    return this.user;
  }
}
