import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Property } from '../../models/Property';
import { Inspection } from '../../models/Inspection';
import { Report } from '../../models/Report';
import { User } from '../../models/User';

import { ReportService } from '../../services/report.service';
import { PropertyService } from '../../services/property.service';
import { InspectionService } from '../../services/inspection.service';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: User;

  properties: Property[];

  inspections: Inspection[];

  reports: Report[] = [];

  constructor(
    private userService: UserService,
    private propertyService: PropertyService,
    private inspectionService: InspectionService,
    private reportService: ReportService
    ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.properties = this.propertyService.getProperties();
    this.inspections = this.inspectionService.getInspections();
    this.loadReports();
  }

  private loadReports() {
    let reportObs: Observable<Report[]>;
    reportObs = this.reportService.getReports();

    reportObs.subscribe(
      resData => {
        this.reports = resData;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

}
