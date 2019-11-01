import { Injectable } from '@angular/core';
import { Inspection } from '../models/Inspection';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  inspections: Inspection[];
  constructor() { 
    this.inspections = [
      {
        time: 'Oct 31st -07:00pm',
        status: 'Signed',
        property: Property,
      },
      {
        time: 'Oct 31st -07:00pm',
        status: 'Pending',
        property: Property,
      },     
      {
        time: 'Oct 31st -07:00pm',
        status: 'Signed',
        property: Property,
      }
    ]
  }

  getInspections(): Inspection[]{
    return this.inspections;
  }
}
