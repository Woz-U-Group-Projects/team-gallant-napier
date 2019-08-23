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
//angularfire2 modules auth and firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    ProjectDisplayComponent, 
    HomeComponent, 
    NavComponent, 
    CustomersComponent, 
    PricingComponent, 
    DemoComponent, 
    LoginComponent,  
    ProjectNewComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    //AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
 
    // Specify the ngx-auth-firebaseui library as an import
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: "AIzaSyBkQF62GAapyP-4vfsSzFUjSE188W78-fY",
      authDomain: "tech-ticket-d75a2.firebaseapp.com",
      databaseURL: "https://tech-ticket-d75a2.firebaseio.com",
      projectId: "tech-ticket-d75a2",
      storageBucket: "tech-ticket-d75a2.appspot.com",
      messagingSenderId: "759976000315",
      appId: "1:759976000315:web:ffe73eccd2c5c223"
    },
    () => 'TechTicketfactory',
    {
      enableFirestoreSync: true, // enable/disable autosync users with firestore
      toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
      toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
      authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
      authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
      passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
      passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
      // Same as password but for the name
      nameMaxLength: 50,
      nameMinLength: 2
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
