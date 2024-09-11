import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required]),
    phone: new UntypedFormControl(null, [Validators.required]),
    email: new UntypedFormControl(null, [Validators.email, Validators.required]),
    feedback: new UntypedFormControl(null, [Validators.required])
  })

  username: String = '';
  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  correct: string;

  sendfeedback() {
    if (!this.contactForm.valid) {
      console.log('Invalid Form');
      this.correct = "*Please enter all the above feilds!";
      return;
    }
    this._userService.contact(JSON.stringify(this.contactForm.value))
      .subscribe(
        data => { console.log(data); this.correct = "Your feedback has been submitted!"; },
        error => this.correct = "*Please enter all the above feilds!"
      )
  }
}