import { EventEmitter } from '@angular/core';

export class LocationService {
  locationDataReceived=new EventEmitter<any[]>();

  private locationData:any[]=[];
  constructor() { }

  addLocationData(data:any[]) {
    this.locationData.push(...data);
    this.locationDataReceived.emit(this.locationData.slice());
  }

}
