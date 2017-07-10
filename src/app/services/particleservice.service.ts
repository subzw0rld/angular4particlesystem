import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ParticleserviceService {
  particleServiceEmitter = new EventEmitter<{id:string}>();
  constructor() { }

  emitSupervisorData(data) {
    this.particleServiceEmitter.emit({id:data});
  }
}
