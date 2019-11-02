import { Property } from './Property';
export class Inspection{
  time: string;
  status: string;
  property: Property;

  public constructor(theTime: string, theStatus: string, theProperty: Property) { 
    this.time = theTime;
    this.status = theStatus;
    this.property = theProperty;
  }
}