import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { ProjectNewComponent } from "./project-new/project-new.component";
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';



const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "customers", component: CustomersComponent},
  {path: "pricing", component: PricingComponent},
  {path: "demo", component: DemoComponent},
  {path: "login", component: LoginComponent},
  {path: "new" , component: ProjectNewComponent},
  {path: "update/:id", component: ProjectUpdateComponent},
  {path: "display", component: ProjectDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
