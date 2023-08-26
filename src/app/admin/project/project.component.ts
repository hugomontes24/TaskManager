import { TreeError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  table: string = "project";
  projects!: Project[];
  newProject: Project = new Project();
  editProject : Project = new Project();
  deleteProject : Project = new Project();
  editIndex: number = 0; // just for information
  deleteIndex: number = 0; // just for information
  searchBy: string="ProjectName";
  searchText: string="";

  constructor( private projectService: ProjectService) {}

  ngOnInit(): void {

    this.getProjects();    
  }

  onSaveClick(){
    this.projectService.insertProject(this.newProject).subscribe({
      next: (response: Project) => {this.projects.push(response);
                        this.getProjects;
                    },
      error: (err: Error )=> {console.log('Error '+ err)},
      complete: ()=> { 
                  this.newProject.id=0;
                  this.newProject.dateStart='';
                  this.newProject.name='';
                  this.newProject.teamSize=0;
              }
    });
  }

  getProjects() :any {

    return this.projectService.getAllProjects(this.table).subscribe({
      next: (response: Project[] ): void => { this.projects = response; },
      error: (err: Error )=> {console.log('Error '+ err)},
      complete: ()=> console.log(this.projects)
     })
  }
 
  onEditClick(event: any, index:number) {
    // console.log (this.projects[index].dateStart.slice(0,10));  **  formater date pour affichage html
    this.editProject.id= this.projects[index].id;
    this.editProject.name= this.projects[index].name;
    this.editProject.dateStart= this.projects[index].dateStart.slice(0,10);
    this.editProject.teamSize= this.projects[index].teamSize;
 
    this.editIndex=index;
  }


  onUpdateClick(){
    this.projectService.updateProject(this.editProject, this.table).subscribe({
      next: (response: Project) => {
                        if(response.name != 'Erreur'){
                          this.projects[this.editIndex]=response;
                          this.getProjects;
                        }else{console.log('erreur la modif n\'a pas été realisée');}
                    },
      error: (err: Error )=> {console.log('Error '+ err)},
      complete: ()=> { 
                  this.editProject.id=0;
                  this.editProject.dateStart='';
                  this.editProject.name='';
                  this.editProject.teamSize=0;
              }
    });
  }

  onDeleteClick(event:any , index: number){
      this.deleteIndex = index;
      this.deleteProject.id= this.projects[index].id;
      this.deleteProject.name= this.projects[index].name;
      this.deleteProject.dateStart= this.projects[index].dateStart.slice(0,10);
      this.deleteProject.teamSize= this.projects[index].teamSize;
    }

  onDeleteConfirm(){
    this.projectService.deleteProject(this.deleteProject.id, this.table).subscribe({
      next: (response) => {
                  this.projects.splice(this.deleteIndex, 1);
                  this.deleteProject.id= 0;
                  this.deleteProject.name= '';
                  this.deleteProject.dateStart= '';
                  this.deleteProject.teamSize= 0;
                }
    });
  }

  onSearchClick(){
    this.projectService.searchProject(this.searchBy, this.searchText, this.table).subscribe({
      next: (response: Project[])=>{ this.projects = response;},
      error: (err:Error )=>{console.log('Error '+ TreeError);},
      complete: () => {}
    })
  }


}
