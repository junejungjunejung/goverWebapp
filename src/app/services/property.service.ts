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
        image: '../../assets/Isengard.jpg'
      },
      {
        name: 'Isengard',
        address: 'North of the White Mountains and west of Anórien',
        tenent: 'Saruman',
        image: '../../assets/Isengard.jpg'
      },
      {
        name: 'Isengard',
        address: 'North of the White Mountains and west of Anórien',
        tenent: 'Saruman',
        image: '../../assets/Isengard.jpg'
      }
    ]
   }

  getProperties(): Property[]{
    return this.properties;
  }
}
