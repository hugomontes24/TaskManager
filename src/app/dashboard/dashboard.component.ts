import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  designation!: string;
  username!: string;
  nbOfTeamMembers!: number;
  totalCostOfAllProjects!: number;
  pendingtasks!: number;
  upComingProjects!: number;
  projectCost!: number;

  currentExpenditure!: number;
  availableFunds!: number;

  ngOnInit(): void {
    this.designation = "Chef d'équipe";
    this.username = "John Smith";
    this.nbOfTeamMembers = 67;
    this.totalCostOfAllProjects= 240;
    this.pendingtasks = 15;
    this.upComingProjects=2;
    this.projectCost=211342;
    this.currentExpenditure=9876;
    this.availableFunds=54340;




  }

}
