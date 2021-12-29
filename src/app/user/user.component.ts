import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users!:User[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.userService.getUserList().subscribe(data=>{
      this.users=data
    })
  }

}
