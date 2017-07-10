import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SkillsService {
  skillsDataReceived = new EventEmitter<any[]>();

  private skills:any[] = [];
  private levels:any[] = [];
  constructor() { }

  addSkillsData(skills:any[], levels:any[]) {
    this.skills.push(...skills);
    this.levels.push(...levels);
    this.skillsDataReceived.emit([{skills:this.skills.slice(), levels:this.levels.slice()}]);
  }

  getSkillByID(id) {
    return this.skills.filter((skill) => {
      if(skill.id === id){
        return skill;
      }
    });
  }

  getLevelByID(id) {
    return this.levels.filter((level) => {
      if(level.id === id){
        return level;
      }
    });
  }

}
