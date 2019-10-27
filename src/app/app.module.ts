import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsViewingComponent } from './components/reports-viewing/reports-viewing.component';

import { InspectionService } from './services/inspection.service';
import { PropertyService } from './services/property.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    PropertiesComponent,
    InspectionsComponent,
    ReportsComponent,
    ProfileComponent,
    ReportsViewingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InspectionService, PropertyService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
