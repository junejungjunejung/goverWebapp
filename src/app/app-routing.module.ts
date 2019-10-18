import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertiesComponent } from './properties/properties.component';
import { InspectionsComponent } from './inspections/inspections.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsViewingComponent } from './reports-viewing/reports-viewing.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'inspections', component: InspectionsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'reports-viewing', component: ReportsViewingComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
