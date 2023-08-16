import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {

    return this.httpClient.get<Project[]>("http://localhost/angular/TaskManager/src/app/api/project.php?action=readAll");
    // return this.httpClient.get<Project[]>("/api/projects");

  }





}
