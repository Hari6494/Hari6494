import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login-component/login.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './master/home/home.component';
import { NihaUsersComponent } from './niha-users/niha-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: NihaUsersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
