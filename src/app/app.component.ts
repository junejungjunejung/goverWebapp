import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gover';

  //showing login page by default by using *ngIf
  isAuthenticated = false;
  //monitoring any change on the object happening after login
  private userSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //monitoring any change on the 'subject'object
    this.userSub = this.userService.userSubject.subscribe(user => {
      //if the 'user' exists, it means the user has logged in and
      //we can hide the login page and show the dashboard
      this.isAuthenticated = !user ? false : true;
    });
  }
}
