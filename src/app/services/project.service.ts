import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(table: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`http://localhost/angular/TaskManager/src/app/api/${table}.php?action=readAll`,{responseType:"json"})
    .pipe(map(
        (data: Project[]) => {
          for (let index = 0; index < data.length; index++) {
            data[index].teamSize = data[index].teamSize*100;  
          }
          return data;}
      ));
    // return this.httpClient.get<Project[]>("/api/projects");
  }

  insertProject(newProject: Project): Observable<Project>{
    return this.httpClient.post<Project>("http://localhost/angular/TaskManager/src/app/api/project.php?action=insert", JSON.stringify( newProject), {responseType: "json"} );
  }

  updateProject(existingProject: Project, table:string): Observable<Project>{
    return this.httpClient.put<Project>(`http://localhost/angular/TaskManager/src/app/api/${table}.php?action=update`, JSON.stringify( existingProject), {responseType: "json"} );
  }

  deleteProject(projectId: number, table:string): Observable<string>{
    return this.httpClient.delete<string>(`http://localhost/angular/TaskManager/src/app/api/${table}.php?action=delete&id=${projectId}`);
  }

  searchProject(searchBy: string, searchText:string, table:string): Observable<Project[]>{
    return this.httpClient.get<Project[]>(`http://localhost/angular/TaskManager/src/app/api/${table}.php?action=search&by=${searchBy}&text=${searchText}`, {responseType:"json"});
  }




}
