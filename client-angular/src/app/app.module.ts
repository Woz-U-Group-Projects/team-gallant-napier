import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { ProjectNewComponent } from './project-new/project-new.component';


@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, ProjectNewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
