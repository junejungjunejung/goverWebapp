export class Property{

  name: string;
  address: string;
  image: string;
  
  public constructor(theName: string, theAddress: string, theImage: string) { 
    this.name = theName;
    this.address = theAddress;
    this.image = theImage;
  }

}