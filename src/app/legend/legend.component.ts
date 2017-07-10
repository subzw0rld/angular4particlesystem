import {LocationService} from './../services/location.service';
import {Component, OnInit, Input} from '@angular/core';
import ApplicationConfig from '../config/ApplicationConfig';

@Component(
  {
    selector: 'app-legend', 
    templateUrl: './legend.component.html', 
    styleUrls: ['./legend.component.css']
  }
)
export class LegendComponent implements OnInit {
  @Input()location : any;
  locationData : any[];
  locationColor : string;
  boxPos='0';
  togglePos=0;

  constructor(private locationService : LocationService) {}

  ngOnInit() {
    this
      .locationService
      .locationDataReceived
      .subscribe((locData) => {
        this.locationData = locData;
        for (let item of this.locationData) {
          for(let obj of ApplicationConfig.LOCATION_COLORCOORDS) {
            if(obj.id === item.id){
              item.color = obj.value;
            }
          }
        }
      });
      //Let the Legend collapse after 2 seconds
      setTimeout(() => {
        this.toggleLegend();
      }, 2000);
  }

  toggleLegend() {
    //Get the width of the legend container
    let elem = <HTMLElement>document.querySelector('.legend-box');
    
    if(this.togglePos === 0) {
      this.togglePos = -elem.offsetWidth;
      
    }else {
      this.togglePos = 0;
    }

    this.boxPos = this.togglePos + 'px';
  }

}
