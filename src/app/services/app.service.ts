import { SkillsService } from './skills.service';
import { LocationService } from './location.service';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import ApplicationConfig from '../config/ApplicationConfig';


@Injectable()
export class AppServiceService {
  private jsonData:any={}
  constructor(private http:Http, private empService:EmployeeService, private locService:LocationService, private skillService:SkillsService) { }

  getData() {
    this.http.get(ApplicationConfig.DATA_URL).subscribe(res => {this.jsonData=res.json(); this.getJSON()});
  }

  addData(obj:any) {
    obj.id = parseInt(this.jsonData.emp[this.jsonData.emp.length-1].id)+1;
    this.jsonData.emp.push(obj);
    //console.info(JSON.stringify(this.jsonData));
    this.getJSON();
  }

  private getJSON() {
    
    this.empService.addEmployeeData(this.jsonData.emp);
    this.locService.addLocationData(this.jsonData.location);
    this.skillService.addSkillsData(this.jsonData.skills, this.jsonData.level);
  }

  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
