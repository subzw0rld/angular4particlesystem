import { EmployeeService } from './../services/employee.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-particlesystem',
  templateUrl: './particlesystem.component.html',
  styleUrls: ['./particlesystem.component.css']
})
export class ParticlesystemComponent implements OnInit {
  empParticles:any[];
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
   this.empService.employeeDataReceived.subscribe(
     (empData:any[]) => {
       this.empParticles = empData;
     }
   );
  }
}
