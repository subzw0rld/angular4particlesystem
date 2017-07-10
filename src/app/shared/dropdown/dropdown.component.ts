import {LocationService} from './../../services/location.service';
import {SkillsService} from './../../services/skills.service';
import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-dropdown', templateUrl: './dropdown.component.html', styleUrls: ['./dropdown.component.css']})
export class DropdownComponent implements OnInit {
  skillData : any[] = [];
  levelData : any[] = [];
  locationData : any[];

  constructor(private sklService : SkillsService, private locationSvc : LocationService) {}

  ngOnInit() {
    
  }

  onDataReceived(event) {
    debugger;
    console.info(event);
  }

}
