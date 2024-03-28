import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StudentDashboardComponent } from './VT_Section/student-dashboard/student-dashboard.component';
import { VTLoginComponent } from './VT_Section/vt-login/vt-login.component';
import { VTModel } from './shared/Model/VTModel.model';
import { VTSignupComponent } from './VT_Section/vt-signup/vt-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    StudentDashboardComponent,
    VTLoginComponent,
    VTSignupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'student_dashboard', component:StudentDashboardComponent },
       { path: '', component: VTLoginComponent,pathMatch: 'full'},
       { path: 'vt_login', component: VTLoginComponent },
       { path: 'vt_signup', component: VTSignupComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
