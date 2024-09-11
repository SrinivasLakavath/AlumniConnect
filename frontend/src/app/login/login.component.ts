import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.email, Validators.required]),
    password: new UntypedFormControl(null, Validators.required)
  });
  constructor(private _router: Router, private _user: UserService) {

  }

  ngOnInit() {
  }

  moveToRegister() {
    this._router.navigate(['/register']);
  }

  wrong: String;

  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid');
      this.wrong = "*Please enter a valid Email Address";
      return;
    }

    this._user.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => { console.log(data); this._router.navigate(['/user']);},
        error => this.wrong = "*Invalid username or password"
      )
  }

}
