import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspection } from '../../models/Inspection';
import { InspectionService } from '../../services/inspection.service';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent {

  inspections: Inspection[] = [];

  page = 1;
  pageSize = 7;
  collectionSize = 0;

  constructor(
    private inspectionService: InspectionService
  ) { }

  ngOnInit() {
    this.loadInspections();
  }

  private loadInspections() {
    let inspectionObs: Observable<Inspection[]>;
    inspectionObs = this.inspectionService.getInspections();

    inspectionObs.subscribe(
      resData => {
        this.inspections = resData;
        this.collectionSize = this.inspections.length;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  get getInspections(): Inspection[] {
    return this.inspections
      .map((inspection, i) => ({id: i + 1, ...inspection}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
