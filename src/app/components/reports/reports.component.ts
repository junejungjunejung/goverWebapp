import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { Inspection } from '../../models/Inspection';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  properties: Property[];

  inspections: Inspection[];

  reports: Report[];

  constructor() { }

  ngOnInit() {
  }

}
