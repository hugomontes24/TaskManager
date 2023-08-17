import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(table: string): Observable<Project[]> {

    return this.httpClient.get<Project[]>(`http://localhost/angular/TaskManager/src/app/api/${table}.php?action=readAll`);
    // return this.httpClient.get<Project[]>("/api/projects");

  }

  insertProject(newProject: Project): Observable<Project>{
    console.log(newProject);
    return this.httpClient.post<Project>("http://localhost/angular/TaskManager/src/app/api/project.php?action=insert", JSON.stringify( newProject) );
  }





}
