import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
});

  constructor() { }

  ngOnInit(): void {
  }

}
