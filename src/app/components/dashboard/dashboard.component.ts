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

  reports: Report[] = [];
  inspections: Inspection[] = [];
  properties: Property[] = [];

  constructor(
    private userService: UserService,
    private propertyService: PropertyService,
    private inspectionService: InspectionService,
    private reportService: ReportService
    ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.loadReports();
    this.loadInspections();
    this.loadProperties();
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

  private loadInspections() {
    let inspectionObs: Observable<Inspection[]>;
    inspectionObs = this.inspectionService.getInspections();

    inspectionObs.subscribe(
      resData => {
        this.inspections = resData;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  private loadProperties() {
    let propertyObs: Observable<Property[]>;
    propertyObs = this.propertyService.getProperties();

    propertyObs.subscribe(
      resData => {
        this.properties = resData;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }
}
