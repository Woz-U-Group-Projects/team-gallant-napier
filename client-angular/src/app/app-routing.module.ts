import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { ProjectNewComponent } from './project-new/project-new.component';


const routes: Routes = [
{ path: "", pathMatch: "full", redirectTo: "/" },
{ path: "projects", component: ProjectDisplayComponent},
{ path: "new", component: ProjectNewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
