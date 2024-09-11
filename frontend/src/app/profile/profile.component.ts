import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:String='USERNAME';
  email:String="email@alumni.com"
  creation_dt:String="just born"
  usn:String="--not added--"
  phone:String="--not added--"
  dob:String="--not added--"
  branch:String="--not added--"
  location:String="--not added--"
  classof:String="--not added--"
  constructor(private _user:UserService, _userService: UserService, public _router:Router) { 
    this._user.user()
    .subscribe(
      data=>this.userDetails(data),
      error => this._router.navigate(['/login']) 
    )
  }

  userDetails(data){
    this.username = data.username;
    this.email = data.email;
    this.creation_dt = data.creation_dt;
    this.usn = data.usn;
    this.phone = data.phone;
    this.dob = data.dob;
    this.branch = data.branch;
    this.location = data.location;
    this.classof = data.classof;
  }

  ngOnInit() {
  }

}
