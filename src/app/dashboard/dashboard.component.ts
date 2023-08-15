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

  clients!: string[];
  projects!: string[];
  years: number[] = [];
  teamMembersSummary: any[] = [];
  teamMembers: any[] = [];

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

    this.clients= ["ABC Ltd", "DEF Solutions", "GHI Industries" ];
    this.projects= ["Project A", "Project B", "Project C" ];

    for(let i=2019; i>2015; i--){
      this.years.push(i);
    }

    this.teamMembersSummary = [
      { region: "East", teamMembersCount: 21, temporaryUnavailableMembers: 4},
      { region: "North", teamMembersCount: 41, temporaryUnavailableMembers: 3},
      { region: "West", teamMembersCount: 15, temporaryUnavailableMembers: 2},
      { region: "South", teamMembersCount: 43, temporaryUnavailableMembers: 4}
    ];

    this.teamMembers = [
      {
        region:"East", members: [
          {id:1, name:"Ford", status:"Avalaible"},
          {id:2, name:"Dupond", status:"Avalaible"},
          {id:3, name:"Frerot", status:"Busy"},
          {id:4, name:"Lopez", status:"Avalaible"},

        ]
      },
      {
        region:"North", members: [
          {id:12, name:"Ford", status:"Avalaible"},
          {id:11, name:"Dupond", status:"Avalaible"},
          {id:10, name:"Frerot", status:"Busy"},
          {id:9, name:"Lopez", status:"Avalaible"},

        ]
      },
      {
        region:"West", members: [
          {id:13, name:"Ford", status:"Avalaible"},
          {id:14, name:"Dupond", status:"Avalaible"},
          {id:15, name:"Frerot", status:"Busy"},
          {id:16, name:"Lopez", status:"Avalaible"},

        ]
      },
      {
        region:"South", members: [
          {id:1, name:"Ford", status:"Avalaible"},
          {id:2, name:"Dupond", status:"Avalaible"},
          {id:3, name:"Frerot", status:"Busy"},
          {id:4, name:"Lopez", status:"Avalaible"},

        ]
      }
    ]


  }

}
