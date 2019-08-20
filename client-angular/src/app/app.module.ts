import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { ProjectNewComponent } from './project-new/project-new.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CustomersComponent } from './customers/customers.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, HomeComponent, NavComponent, CustomersComponent, PricingComponent, DemoComponent, LoginComponent,  ProjectNewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
