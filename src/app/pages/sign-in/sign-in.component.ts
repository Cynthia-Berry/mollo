import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

    static SignInFormData() {
    return {
      email: ['johndoe@example.com', Validators.required],
      password: ['******', Validators.required],
    }
  }
  constructor(private _formBuilder: FormBuilder) {
      this.signInForm = this._formBuilder.group(SignInComponent.SignInFormData())
  }

  ngOnInit(): void {
  }

}
