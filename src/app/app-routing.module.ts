import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { InspectionsComponent } from './components/inspections/inspections.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsViewingComponent } from './components/reports-viewing/reports-viewing.component';
import { ProfileComponent } from './components/profile/profile.component';

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
