import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from "../models/project";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {
  @Input() project = { name: "", createdBy: "" } 

  constructor(private projectService: ProjectService, private router: Router) { }

  projects: Project[] = [];

  addProject() {
    this.projectService.addProject(this.project).subscribe(project => (this.project = project));
    this.router.navigate(['/display']);
  }


  ngOnInit() {
  
  }

}
