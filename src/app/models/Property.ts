export class Property{

  name: string;
  address?: string;
  tenent?: string;
  image?: string;
  
  public constructor(theName: string, theAddress: string, theTenant: string, theImage: string) { 
    this.name = theName;
    this.address = theAddress;
    this.tenent = theTenant;
    this.image = theImage;
  }

}