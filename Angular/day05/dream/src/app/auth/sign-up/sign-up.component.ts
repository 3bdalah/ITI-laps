import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  registrationForm: FormGroup;
  constructor() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S*$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/i
        ),
      ]),
    });
  }

  handleRegistarUser(): void {
    console.log(this.registrationForm.value);
  }
}
