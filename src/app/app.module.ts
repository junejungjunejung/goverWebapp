import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReportsViewingComponent } from './components/reports-viewing/reports-viewing.component';

import { ReportService } from './services/report.service';
import { InspectionService } from './services/inspection.service';
import { PropertyService } from './services/property.service';
import { UserService } from './services/user.service';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReportpdfDirective } from './reportpdf.directive';

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
    ReportsViewingComponent,
    ReportpdfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [InspectionService, PropertyService, UserService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
