import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginModel} from '../../../Model/login-model.model'
import { AuthenticatedResponse } from 'src/Model/authenticated-response.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = true;
  credentials: LoginModel = {username:'', password:''};

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login = ( form: NgForm) => {
    if (form.valid) {
      this.http.post<AuthenticatedResponse>("https://localhost:5001/api/auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: AuthenticatedResponse) => {
          const token = response.token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
    }
  }
}

