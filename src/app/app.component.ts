import { AppServiceService } from './services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Particle System';

  private data: any;
  private errorMsg:string;

  constructor( private appService: AppServiceService ) {

  }

  ngOnInit() { 
    this.init(); 
  }

  init() {
    this.appService.getData();
  }
}
