import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { Inspection } from '../../models/Inspection';
import { Report } from '../../models/Report';
import { User } from '../../models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  properties: Property[];

  inspections: Inspection[];

  reports: Report[];

  user: User[];

  constructor() { }

  ngOnInit() {
  }

}
