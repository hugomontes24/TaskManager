import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit{
  projects!: Project[];

  constructor( private projectService: ProjectService) {}

  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe({
      next: (response: Project[]) => { this.projects = response; },
      error: (err: Error )=> {console.log('Error '+ err)},
      complete: ()=> console.log(this.projects)

    })

  }
}
