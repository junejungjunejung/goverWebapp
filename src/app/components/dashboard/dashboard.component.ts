import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { Inspection } from '../../models/Inspection';
import { Report } from '../../models/Report';
import { User } from '../../models/User';

import { PropertyService } from '../../services/property.service';
import { InspectionService } from '../../services/inspection.service';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  properties: Property[];

  inspections: Inspection[];

  reports: Report[];

  user: User;

  constructor(
    private userService: UserService,
    private propertyService: PropertyService,
    private inspectionService: InspectionService
    ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.properties = this.propertyService.getProperties();
    this.inspections = this.inspectionService.getInspections();
  }

}
