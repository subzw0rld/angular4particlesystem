import { ParticleserviceService } from './services/particleservice.service';
import { ParticlenodeDirective } from './shared/particlenode.directive';
import { SkillsService } from './services/skills.service';
import { LocationService } from './services/location.service';
import { EmployeeService } from './services/employee.service';
import { AppServiceService } from './services/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticlesystemComponent } from './particlesystem/particlesystem.component';
import { ParticleComponent } from './particle/particle.component';
import { LegendComponent } from './legend/legend.component';
import { ToggleInfoViewDirective } from './shared/toggle-info-view.directive';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesystemComponent,
    ParticleComponent,
    ParticlenodeDirective,
    LegendComponent,
    ToggleInfoViewDirective,
    AdminpanelComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    AppServiceService,
    EmployeeService,
    LocationService,
    SkillsService,
    ParticleserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
