import { AppServiceService } from './../services/app.service';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LocationService } from './../services/location.service';
import { SkillsService } from './../services/skills.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  @Output('customEvt') evtEmitter = new EventEmitter<any[]>();
  @ViewChild('nameInput')nameInput:ElementRef;
  @ViewChild('designationInput')designationInput:ElementRef;
  
  private skillData:any[]=[];
  private levelData:any[]=[];
  private locationData:any[];
  private empData:any={};
  private superVisorArr:any[]=[];
  private selectedLocation:string;

  constructor(private sklService:SkillsService, private locationSvc:LocationService, private empSvc:EmployeeService, private appService:AppServiceService) {
  }

  ngOnInit() {
    this.sklService.skillsDataReceived.subscribe(
      (sklData) => {
        this.skillData = sklData[0].skills;
        this.levelData = sklData[0].levels;

        //this.evtEmitter.emit(sklData[0].levels);
      }
    );

    this.evtEmitter.emit(this.skillData);

    this.locationSvc.locationDataReceived.subscribe(
      (locData) => {
        //console.info(locData);
        this.locationData = locData;
      }
    );

    this.empSvc.employeeDataReceived.subscribe(
      (empObj) => {
        this.superVisorArr = empObj.filter((emp) => {
          if(emp.desig=="Manager" || emp.desig=="Sr Manager" || emp.desig=="Vice President") {
            return emp;
          }
        });

      }
    );

    this.empData.skills=[];
  }

  toggleDropdown(event) {
    let el = event.target;
    let parentEl = el.closest('.custom-select'); //new native method supported by major latest browsers
    let contentDisplayElement = this.getElementByClass(parentEl.childNodes, 'select-content');
    // let toggleClass:string;

    // if(parentEl.classList.contains('hide')) {
    //   toggleClass = parentEl.className.replace('hide', 'show');
    // }else {
    //   toggleClass = parentEl.className.replace('show', 'hide');
    // }

    //parentEl.className = toggleClass;
    this.toggleClass(parentEl, 'hide', 'show');
  }

  toggleClass(elem, classA, classB) {
    let toggleClass:string;

    if(elem.classList.contains(classA)) {
      toggleClass = elem.className.replace(classA, classB);
    }else {
      toggleClass = elem.className.replace(classB, classA);
    }

    elem.className = toggleClass;
  }

  getElementByClass(list, className:string) {
    for (let el of list) {
      
      if(el.classList && el.classList.contains(className)) {
        return el;
      }
    }
  }

  updateData(event, type:string) {
    let el = event.target;
    let parentEl = el.closest('.dropdown');

    switch(type) {
      case 'supervisor':
        this.empData.supervisor = parseInt(parentEl.querySelector('input[type="radio"]:checked').value);
        parentEl.closest('.custom-select').querySelector('.select-content').innerText = "1 Value Selected";
      break;
      case 'location':
        this.empData.location = parseInt(parentEl.querySelector('input[type="radio"]:checked').value);
        parentEl.closest('.custom-select').querySelector('.select-content').innerText = "1 Value Selected";
      break;
      case 'skill':
        let selectedCheckboxes = parentEl.querySelectorAll('input[type="checkbox"]:checked');
        parentEl.closest('.custom-select').querySelector('.select-content').innerText = selectedCheckboxes.length +" Value(s) Selected";

        for(let elem of selectedCheckboxes) {
          let selectedLevel = elem.closest('li').querySelector('input[type="radio"]:checked').value;
          this.empData.skills.push({id:parseInt(elem.value), level:parseInt(selectedLevel)});
        }
      break;
    }
  }

  onSubmit(event) {
    this.empData.name = this.nameInput.nativeElement.value;
    this.empData.desig = this.designationInput.nativeElement.value;
    this.empData.supervisor;
    
    this.appService.addData(this.empData);
    this.togglePanel();
  }

  togglePanel() {
    let panelBody = <HTMLElement>document.querySelector('.panel-body');
    this.toggleClass(panelBody, 'collapse', 'expand');
  }

}