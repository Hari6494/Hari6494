import { Component, OnInit } from '@angular/core';

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
  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  userDataSource :NihaUser[]  = USER_DATA;
}
