import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as fasStar, fas, faCoffee } from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent, 
    ProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule  
  ],
  exports: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent
  ],
  providers:[ DashboardService]
})
export class AdminModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
 }
