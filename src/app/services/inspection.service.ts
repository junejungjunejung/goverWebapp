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
        property: new Property('Isengard','North of the White Mountains and west of Anórien','../../assets/Isengard.jpg'),
        tenant: 'Saruman',
        image: '../../assets/Isengard.jpg'
      },
      {
        time: 'Oct 31st -07:00pm',
        status: 'Signed',
        property: new Property('Isengard','North of the White Mountains and west of Anórien','../../assets/Isengard.jpg'),
        tenant: 'Saruman',
        image: '../../assets/Isengard.jpg'
      },     
      {
        time: 'Oct 31st -07:00pm',
        status: 'Signed',
        property: new Property('Isengard','North of the White Mountains and west of Anórien','../../assets/Isengard.jpg'),
        tenant: 'Saruman',
        image: '../../assets/Isengard.jpg'
      }
    ]
  }

  getInspections(): Inspection[]{
    return this.inspections;
  }
  
}
