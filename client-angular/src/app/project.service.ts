import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "./models/project";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  apiUrl: string = "http://localhost:8080/projects";

  constructor(private http: HttpClient, private router: Router) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.apiUrl + '/' + id);
  }
  
  addProject(project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  deleteProject(id: any) {
    return this.http.delete(this.apiUrl + "/" + id);
  }

  updateProject(project: Project): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${project.id}`, project);
  }

}