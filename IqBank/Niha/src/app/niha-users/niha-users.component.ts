import { Component, OnInit } from '@angular/core';
// import { constants } from 'buffer';
import { UserServiceService} from './user-service.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
export interface NihaUser {
  id: string;
  name: string;
  email: string;
  password: string;
}
const USER_DATA: NihaUser[] = [
  {id:'626f9350c703c88f44c10441',name:'Hari',email:'hari.anbu93@gmail.com',password :'hari.anbu93'},
  {id:'626f94c1c703c88f44c10443',name:'Nive',email:'nive.anbu93@gmail.com',password :'Nive.anbu93'}
];

@Component({
  selector: 'app-niha-users',
  templateUrl: './niha-users.component.html',
  styleUrls: ['./niha-users.component.css']
})

export class NihaUsersComponent  {
  userDataFromService : any;
  UserDataWithAuth : any;
  userDataSource1 : any;
  constructor(private userService : UserServiceService,private http: HttpClient){
this.userService.GetUserData().subscribe(result=>{
this.userDataFromService = result;
console.log(this.userDataFromService);
})
  }

  ngOnInit(): void {
    this.http.get("https://localhost:7271/api/Users")
    .subscribe({
      next: (result: any) => this.userDataSource1 = result ,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  userDataSource :NihaUser[]  = USER_DATA;
  //userDataSource1 : any = this.UserDataWithAuth;
}
