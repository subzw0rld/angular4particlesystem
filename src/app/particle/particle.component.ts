import { ParticleserviceService } from './../services/particleservice.service';
import {SkillsService} from './../services/skills.service';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import ApplicationConfig from '../config/ApplicationConfig';

@Component(
  {
    selector: 'app-particle', 
    templateUrl: './particle.component.html', 
    styleUrls: ['./particle.component.css']
  }
)
export class ParticleComponent implements OnInit {
  @Input()particle : any;

  skillArr : any[] = [];
  randomPositionX : string;
  randomPositionY : string;
  locationColor : string;
  size : string;
  timer : any;
  quadArr : string[] = ['-', '+'];
  force = 40;
  allowMovement : Boolean = true;
  pulse: Boolean = false;

  constructor(private sklService : SkillsService, private particleSvc:ParticleserviceService) {
  }

  ngOnInit() {
    this.setParticleSize();
    this.setSkill();
    this.locationColor = ApplicationConfig.getLocationByID(this.particle.location)[0].value;
    this.particleSvc.particleServiceEmitter.subscribe(
      (particleData) => {
        if(particleData.id === this.particle.id) {
          this.pulse = true;
        }
      }
    );
    this.initializeMovement();
  }

  initializeMovement() {
    let xRange = ApplicationConfig.RANDOM_RANGEX();
    let yRange = ApplicationConfig.RANDOM_RANGEY();
    let dim = parseInt(this.size.substr(0, this.size.indexOf('p')));
    let posX = Math.round(Math.random() * xRange - dim);
    let posY = Math.round(Math.random() * yRange - dim);
    let item = this.quadArr[Math.floor(Math.random() * this.quadArr.length)];
    let speed = (this.force / dim);

    this.timer = setInterval(() => {
      if (!this.allowMovement) {
        return;
      }

      switch (item) {
        case '-':
          posX -= speed;
          posY -= speed;
          break;
        case '+':
          posX += speed;
          posY += speed;
          break;
      }

      if (posX <= 0) {
        posX = xRange;
      }

      if (posX > (xRange - dim)) {
        posX = dim;
      }

      if (posY <= 0) {
        posY = yRange;
      }

      if (posY > (yRange - dim)) {
        posY = dim;
      }

      this.randomPositionX = Math
        .round(posX)
        .toString() + 'px';
      this.randomPositionY = Math
        .round(posY)
        .toString() + 'px';
    }, 50);
  }

  setParticleSize() {
    switch (this.particle.desig) {
      case 'Manager':
        this.size = ApplicationConfig.MGR;
        break;
      case 'Vice President':
        this.size = ApplicationConfig.VP;
        break;
      case 'Sr Manager':
        this.size = ApplicationConfig.SR_MGR;
        break;
      case 'Sr Associate L1':
        this.size = ApplicationConfig.SAL1;
        break;
      case 'Sr Associate L2':
        this.size = ApplicationConfig.SAL2;
        break;
      case 'Software Engineer':
        this.size = ApplicationConfig.SOFTWARE_ENGINEER;
        break;
    }
  }

  setSkill() {
    for (let skill of this.particle.skills) {
      console.info(skill);
      let skillObj = this.sklService.getSkillByID(skill.id);
      let levelObj = this.sklService.getLevelByID(skill.level);
      //console.info(skillObj, levelObj);
      this.skillArr.push({skill: skillObj[0].name, level: levelObj[0].name});
    }
  }

  onParticleClicked() {
    this.allowMovement = !this.allowMovement;
  }

  showSupervisor() {
    this.particleSvc.emitSupervisorData(this.particle.supervisor);
  }


}