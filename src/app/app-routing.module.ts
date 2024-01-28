import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuardService} from './auth-guard.service'
import { CardDetailsComponent } from './card-details/card-details.component';
import { ProfileComponent } from './profile/profile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CourseComponent } from './course/course.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addtoCard', component: CardDetailsComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
