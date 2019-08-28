import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../project.service";
import { Project } from "../models/project";
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: "app-project-display",
  templateUrl: "./project-display.component.html",
  styleUrls: ["./project-display.component.css"]
})
export class ProjectDisplayComponent implements OnInit {
  constructor(private projectService: ProjectService, private router: Router) {}

  projects: Project[] = [];


  getProjects() {
    this.projectService
      .getProjects()
      .subscribe(projects => (this.projects = projects));
  }

  deleteProject(project: Project): void {
    this.projectService.deleteProject(project.id).subscribe( data => this.projects = this.projects.filter(u => u !== project));
    this.router.navigate(['/display']);
  }
/*
  updateProject(id) {
    this.router.navigate(['/update' + id]);
  }
*/
  ngOnInit() {
    this.getProjects();
  }
}
