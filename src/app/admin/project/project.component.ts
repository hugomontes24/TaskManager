import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  table: string = "project";
  projects!: Project[];
  newProject: Project = new Project();

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
    })
  }

  getProjects() : any {

    return this.projectService.getAllProjects(this.table).subscribe({
      next: (response: Project[] ): void => { this.projects = response; },
      error: (err: Error )=> {console.log('Error '+ err)},
      complete: ()=> console.log(this.projects)

     })


  }



}
