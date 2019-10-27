import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { Inspection } from '../../models/Inspection';
import { Report } from '../../models/Report';

@Component({
  selector: 'app-reports-viewing',
  templateUrl: './reports-viewing.component.html',
  styleUrls: ['./reports-viewing.component.scss']
})
export class ReportsViewingComponent implements OnInit {

  properties: Property[];

  inspections: Inspection[];

  reports: Report[];

  constructor() { }

  ngOnInit() {
  }

}
