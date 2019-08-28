import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  editProject: Project = new Project();

  constructor(private projectService: ProjectService, private router: Router, private actRoute: ActivatedRoute) { }

  updateProject() {
    this.projectService.updateProject(this.editProject).subscribe(); // => {

      this.router.navigate(['/display']); 
  
   
  }

  ngOnInit() {
  this.actRoute.params.subscribe(param => {
    this.projectService.getProject(+param["id"]).subscribe(data => (this.editProject = data));
  });
  }

}
