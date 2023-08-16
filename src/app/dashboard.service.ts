import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  teamMembersSummary:any[]= [
    { region: "East", teamMembersCount: 21, temporaryUnavailableMembers: 4},
    { region: "North", teamMembersCount: 41, temporaryUnavailableMembers: 3},
    { region: "West", teamMembersCount: 15, temporaryUnavailableMembers: 2},
    { region: "South", teamMembersCount: 43, temporaryUnavailableMembers: 4}
  ];


  getTeamMembersSummary():any[] {
    
    return this.teamMembersSummary;

  }


}
