// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   constructor(private _router: Router, private _auth: AuthService) {}
//   loginForm: FormGroup = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//   });
//   login() {
//     const { username, password } = this.loginForm.value;
//     // if (username === "admin" && password === "admin") {
//     //   this._router.navigate(['/dashboard']);
//     // } else {
//     //   alert("wrong username or password");
//     // }
//     this._auth.login(username, password).subscribe({
//       next: () => this._router.navigate(['/dashboard']),
//       error: (err) => console.log(err),
//     });
//   }
// }

// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   constructor(
//     private _router: Router,
//     private _auth: AuthService,
//     private http: HttpClient
//   ) {}

//   loginForm: FormGroup = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//   });

//   login() {
//     const { username, password } = this.loginForm.value;
//     // if (username === "admin" && password === "admin") {
//     //   this._router.navigate(['/dashboard']);
//     // } else {
//     //   alert("wrong username or password");
//     // }

//     this._auth.login(username, password).subscribe({
//       next: () => this._router.navigate(['/dashboard']),
//       error: (err) => console.log(err),
//     });
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Adjust path as necessary
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Call the login method in AuthService
      this.authService.login(username, password).subscribe(
        (response) => {
          // Redirect to dashboard if login is successful
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Handle login error (e.g., invalid credentials)
          this.errorMessage = 'Invalid username or password. Please try again.';
        }
      );
    }
  }
}
