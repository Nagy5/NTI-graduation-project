import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _router: Router, private _auth: AuthService) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const { email, password } = this.loginForm.value;

    this._auth.login(email, password).subscribe({
      next: () => this._router.navigate(['/dashboard/edit-home']),
      error: (err) => console.log(err),
    });
  }
}
