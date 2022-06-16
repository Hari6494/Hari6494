import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AuthGuard} from './guards/auth-guard.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NihaUsersComponent } from './niha-users/niha-users.component';
import { MatNativeDateModule} from '@angular/material/core';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './master/home/home.component';
import { JwtModule } from "@auth0/angular-jwt";
import {AuthModule} from './auth/auth.module';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    NihaUsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
