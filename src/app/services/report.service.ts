import { Injectable } from '@angular/core';
import { Inspection } from '../models/Inspection';
import { Property } from '../models/Property';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})

export class ReportService {
  reports: Report[];

  constructor() { 

    this.reports = [
      {
        inspection: new Inspection('Oct 31st -07:00pm','Signed',new Property('Isengard','North of the White Mountains and west of Anórien', 'Saruman','../../assets/Isengard.jpg'))
      },
      {
        inspection: new Inspection('Oct 31st -07:00pm','Signed',new Property('Isengard','North of the White Mountains and west of Anórien', 'Saruman','../../assets/Isengard.jpg'))
      },
      {
        inspection: new Inspection('Oct 31st -07:00pm','Signed',new Property('Isengard','North of the White Mountains and west of Anórien', 'Saruman','../../assets/Isengard.jpg'))
      }
    ]
  }

  getReports(): Report[]{
    return this.reports;
  }
}
