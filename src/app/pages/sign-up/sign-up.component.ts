import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

    static SignUpFormData() {
    return {
      fullname: ['John Doe', Validators.required],
      phone: ['+234123456789', Validators.required],
      email: ['johndoe@example.com', Validators.required],
      password: ['******', Validators.required],
    }
  }

  constructor(private _formBuilder: FormBuilder) {
      this.signUpForm = this._formBuilder.group(SignUpComponent.SignUpFormData())
  }

  ngOnInit(): void {
  }

}
