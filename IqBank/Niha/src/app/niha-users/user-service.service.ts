import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
apiurl : string ="https://iq-bank.herokuapp.com/api/Users";
  constructor(private http: HttpClient) { }
  Users: any;
  GetUserData(){
    return this.http.get(this.apiurl);
  }

  ngOnInit(): void {
    this.http.get("https://localhost:7271/api/Users")
    .subscribe({
      next: (result: any) => this.Users = result,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }
}
