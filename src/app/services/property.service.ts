import { Injectable } from '@angular/core';
import { Property } from '../models/Property';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  properties: Property[];

  constructor() {
    this.properties = [
      {
        name: 'Isengard',
        address: 'North of the White Mountains and west of Anórien',
        tenent: 'Saruman',
        image: '../../assets/Isengard.svg'
      },
      {
        name: 'Isengard',
        address: 'North of the White Mountains and west of Anórien',
        tenent: 'Saruman',
        image: '../../assets/Isengard.svg'
      },
      {
        name: 'Isengard',
        address: 'North of the White Mountains and west of Anórien',
        tenent: 'Saruman',
        image: '../../assets/Isengard.svg'
      }
    ]
   }

  getProperties(): Property[]{
    return this.properties;
  }
}
