import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../../models/Property';

import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {

  properties: Property[] = [];

  page = 1;
  pageSize = 7;
  collectionSize = 0;

  constructor(
    private propertyService: PropertyService
  ) { }

  ngOnInit() {
    this.loadProperties();
  }

  private loadProperties() {
    let propertyObs: Observable<Property[]>;
    propertyObs = this.propertyService.getProperties();

    propertyObs.subscribe(
      resData => {
        this.properties = resData;
        this.collectionSize = this.properties.length;
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

  get getProperties(): Property[] {
    return this.properties
      .map((property, i) => ({id: i + 1, ...property}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
