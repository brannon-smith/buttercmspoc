import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButterPageComponent } from './butter-page/butter-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cms/:slug', component: ButterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  Ng4LoadingSpinnerModule.forRoot() ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
