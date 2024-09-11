import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators, NgForm } from '@angular/forms';
import { Post } from '../post.model';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  uname: String = '--not added--';
  title: String = "--not added--"
  content: String = "--not added--"
  creation_dt: String = "--not added--"

  postForm: UntypedFormGroup = new UntypedFormGroup({
    uname: new UntypedFormControl(null, Validators.required),
    title: new UntypedFormControl(null, Validators.required),
    content: new UntypedFormControl(null, Validators.required)
  })

  username: String = '';
  constructor(public _userService: UserService, public _router: Router) {
    this._userService.user()
      .subscribe(
        data => this.addName(data),
        error => this._router.navigate(['/login'])
      )
  }
  addName(data) {
    this.username = data.username;
  }



  ngOnInit() {
    this.refreshPostList();
  }

  refreshPostList() {
    this._userService.getPosts().subscribe((res) => {
      this._userService.posts = res as Post[];
    });
  }

  invalid: String;

  createPost() {

    if (!this.postForm.valid) {
      this.invalid = "Please enter data"; return;
    }
    this._userService.post(JSON.stringify(this.postForm.value))
      .subscribe(
        data => { console.log(data); this.refreshPostList(); this.invalid = "Post Updated Successfully"; },
        error => this.invalid = "Please enter the Data!"
      )
  }


}
