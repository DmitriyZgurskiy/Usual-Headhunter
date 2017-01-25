import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { HeadhuntersComponent } from '../../components/headhunters/headhunters.component';
import { HeadhunterDetailComponent } from '../../components/headhunter-detail/headhunter-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'headhunters', component: HeadhuntersComponent },
  { path: 'detail/:id', component: HeadhunterDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
